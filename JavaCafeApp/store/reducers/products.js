import PRODUCTS from "../../data/dummy-data";
import { DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT } from '../actions/products';
import Product from '../../models/product';

const initialState = {
    availableProducts: PRODUCTS, //Initialize availableProducts with the PRODUCTS imported from dummy-data.js 
    hotProducts: PRODUCTS.filter(prod => prod.prodId === 'hot'),//Only show products that are hot
    coldProducts: PRODUCTS.filter(prod => prod.prodId === 'cold'),//Only show products that are cold
    pastryProducts: PRODUCTS.filter(prod => prod.prodId === 'pastry')//Only show products that are pastries
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
        const newProduct = new Product(
        new Date().toString(),
        'hot',
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
        );
        return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        hotProducts: state.hotProducts.concat(newProduct)
      };
      case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        prod => prod.id === action.pid
      );
      const updatedProduct = new Product(
        action.pid,
        state.userProducts[productIndex].prodId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIndex].price
      );
      const availableProductIndex = state.availableProducts.findIndex(
        prod => prod.id === action.pid
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts
      };
        case DELETE_PRODUCT:
          return {
            ...state,
            hotProducts: state.hotProducts.filter(
              product => product.id !== action.pid
            ),
            coldProducts: state.coldProducts.filter(
                product => product.id !== action.pid
            ),
            pastryProducts: state.pastryProducts.filter(
                product => product.id !== action.pid
            ),
            availableProducts: state.availableProducts.filter(
                product => product.id !== action.pid
              ),
          };
      }
      return state;
}//only one case here currently (Delete) but more will need to be added