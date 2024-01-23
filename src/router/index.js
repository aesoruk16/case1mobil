import React, {Component} from 'react';

import {Scene, Router} from 'react-native-router-flux';

//--------------------------
import Index from '../views/index';
import Cart from '../views/Cart';
import ProductDetail from '../views/ProductDetail';
import Favorites from '../views/Favorites';
//--------------------------

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Index" component={Index} title="Index" hideNavBar initial />
        <Scene
          key="ProductDetail"
          component={ProductDetail}
          title="ProductDetail"
          hideNavBar
        />
         <Scene
          key="Favorites"
          component={Favorites}
          title="Favorites"
          hideNavBar
        />

        <Scene key="Cart" component={Cart} title="Cart" hideNavBar />
      </Scene>
    </Router>
  );
};
export default RouterComponent;
