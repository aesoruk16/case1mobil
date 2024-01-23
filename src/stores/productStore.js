import mobx, {
  observable,
  action,
  computed,
  toJS,
  makeAutoObservable,
} from 'mobx';
import _ from 'lodash';

import baseStore from './base';
class ProductStore {
  visibleProducts = [];
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 12;

  constructor(val) {
    console.log(val);
    makeAutoObservable(this);
  }
  @action('loadProducts')
  loadProducts(custom = null) {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const additionalProducts = baseStore.getProductsSlice(start, end);

    this.visibleProducts = [...this.visibleProducts, ...additionalProducts];
    console.log(toJS(this.visibleProducts));
    this.isLoading = false;
  }
  @action('loadProducts')
  getFavoriteProducts() {
    const favoriteData = _.filter(baseStore.getProductsJson, (product) => {
      //this.selectedBrands.includes çalışmadı daha sonra bka.
      return product.favorites;
    });
    return favoriteData;
  }

  handleLoadMore() {
    this.isLoading = true;
    this.currentPage += 1;
    console.log('handleLoadMore');
    this.loadProducts();
  }
  @computed get visibleProductsJson() {
    return toJS(this.visibleProducts);
  }
}

const productStore = new ProductStore();
export default productStore;
