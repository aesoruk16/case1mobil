import mobx, {
  observable,
  action,
  computed,
  toJS,
  makeAutoObservable,
} from 'mobx';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

import {genericGetMethod, genericPostMethod, endPoints} from '../services/api';
import logger from '../utils/logger';
import productStore from './productStore';

class BaseStore {
  productsBaseData = [];
  cart = [];
  products = [];
  selectedSort = null;
  searchText = '';

  selectedBrands = [];
  selectedModel = [];
  defaultBrands = [];
  defaultModels = [];
  favorites = [];
  brands = [];
  models = [];
  constructor(val) {
    makeAutoObservable(this);
    this.init();
  }
  async init() {
    await this.getProducts();
    this.getFilterItem();
    this.SearchBox(1, '', 'name');
    this.getCart();
  }
  async getCart() {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      console.log(cartData);

      if (cartData) {
        this.cart = JSON.parse(cartData) || [];
      } else {
        this.cart = [];
      }
    } catch (error) {
      logger.error('Error cart:', error);
    }
  }

  getFilterItem() {
    this.models = _.uniqBy(this.productsBaseData, 'model');
    this.brands = _.uniqBy(this.productsBaseData, 'brand');
    this.defaultBrands = this.brands;
    this.defaultModels = this.models;
  }
  changeSelectedSort(val) {
    this.selectedSort = val;
    this.filter();
  }
  ResetFilter() {
    this.selectedSort = [];
    this.selectedBrands = [];
    // this.filter();
  }
  changeSelectedBrands(brand) {
    const index = this.selectedBrands.indexOf(brand);
    if (index === -1) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands.splice(index, 1);
    }
    this.filter();

    // alert(JSON.stringify(this.selectedBrands))
  }
  changeSelectedModel(val) {
    const index = this.selectedModel.indexOf(val);
    if (index === -1) {
      this.selectedModel.push(val);
    } else {
      this.selectedModel.splice(index, 1);
    }
    this.filter();
  }
  deleteCart() {
    this.cart = [];
    AsyncStorage.setItem('cart', JSON.stringify(this.cart));
  }
  calculateTotalPrice() {
    let totalPrice = 0;

    for (const product of this.cart) {
      totalPrice += product.quantity * product.price;
    }

    return totalPrice.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  @action
  SearchBox(type = null, search = null, filter) {
    console.log(type, search);
    var data = null;
    const like = (value, searchTerm) => {
      const regex = new RegExp(_.escapeRegExp(searchTerm), 'i');
      return regex.test(value);
    };
    this.search = search;
    switch (type) {
      case 1:
        data = _.filter(this.productsBaseData, (item) =>
          like(item[filter], search),
        );
        // alert(data.length);
        // console.log("filterData:"+data.length);

        if (search == '') {
          productStore.visibleProducts = [];
          productStore.currentPage = 1;
          productStore.loadProducts();
        } else {
          productStore.visibleProducts = data;
        }
        // productStore.visibleProducts = [];

        // // productStore.visibleProducts = data.reverse();
        // productStore.currentPage = 2;
        //productStore.handleLoadMore();
        // productStore.loadProducts();
        this.ResetFilter();
        break;
      case 2:
        data = _.filter(this.defaultBrands, (item) =>
          like(item[filter], search),
        );
        this.brands = data;
        break;
      case 3:
        data = _.filter(this.defaultModels, (item) =>
          like(item[filter], search),
        );
        this.models = data;
        break;
      default:
        break;
    }
  }

  filter() {
    let filterData = [];
    // alert(this.selectedSort)
    switch (this.selectedSort) {
      case 1:
        filterData = _.sortBy(this.productsBaseData, ['createdAt']).reverse();
        break;
      case 2:
        filterData = _.sortBy(this.productsBaseData, ['createdAt']);
        break;
      case 3:
        filterData = _.sortBy(this.productsBaseData, ['price']).reverse();
        break;
      case 4:
        filterData = _.sortBy(this.productsBaseData, ['price']);
        break;
      default:
        filterData = this.productsBaseData;
        break;
    }
    if (this.selectedBrands.length != 0) {
      console.log(toJS(this.selectedBrands));
      filterData = _.filter(filterData, (product) => {
        //this.selectedBrands.includes çalışmadı daha sonra bka.
        return this.selectedBrands.includes(product.brand);
      });
    } else {
      filterData = filterData;
    }
    if (this.selectedModel.length != 0) {
      console.log(toJS(this.selectedModel));
      filterData = _.filter(filterData, (product) => {
        //this.selectedBrands.includes çalışmadı daha sonra bka.
        return this.selectedModel.includes(product.model);
      });
    } else {
      filterData = filterData;
    }
    productStore.visibleProducts = [];
    productStore.visibleProducts = filterData;
    this.products = filterData;
    // productStore.currentPage = 1;
    // productStore.loadProducts();
  }
  getProductsSlice(start, end) {
    return this.products.slice(start, end);
  }
  async getProducts() {
    const endPoint = endPoints.product.products;

    try {
      const productsData = await genericGetMethod(endPoint);
      logger.info({
        endPoint: endPoint,
        type: 'getProducts',
        data: productsData,
      });
      if (productsData != null) {
        this.products = productsData;
        this.productsBaseData = productsData;
        productStore.loadProducts();
      }
    } catch (error) {
      logger.error({
        endPoint: endPoint,
        type: 'getProducts',
        error: error,
      });
    }
  }

  

  addToCart(product, type = null) {
    var existingProductIndex = this.cart.findIndex(
      (item) => item.id === product.id,
    );

    if (type === 0 && existingProductIndex !== -1) {
      this.cart[existingProductIndex].quantity -= 1;
      console.log(this.cart[existingProductIndex]);
      if (this.cart[existingProductIndex].quantity === 0) {
        this.cart.splice(existingProductIndex, 1);
      }
    } else if (existingProductIndex !== -1) {
      this.cart[existingProductIndex].quantity += 1;

      if (this.cart[existingProductIndex].quantity === 0) {
        this.cart.splice(existingProductIndex, 1);
      }
    } else {
      this.cart.push({...product, quantity: 1});
    }

    this.saveCartToLocalStorage();
  }
  controlFilter(varB, item, name) {
    console.log('controlFilter' + varB);
    if (this[varB]) {
      const itemKey = item[name];

      if (itemKey && this[varB].includes(itemKey)) {
        return true;
      }
      return false;
    }
    return false;
  }
  addToFavorites(product, type = null) {
    var existingProductIndex = this.products.findIndex(
      (item) => item.id === product.id,
    );
    this.products[existingProductIndex].favorites = type;
  }
  // bu ikisini tek method yap
  saveFavoritesToLocalStorage() {
    AsyncStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
  saveCartToLocalStorage() {
    AsyncStorage.setItem('cart', JSON.stringify(this.cart));
  }
  @computed get getProductsJson() {
    return toJS(this.products);
  }
  @computed get getCartJson() {
    return toJS(this.cart);
  }
}

const baseStore = new BaseStore();
export default baseStore;
