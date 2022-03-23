import PRODUCTS from "../../data/dummy-data";
import { DELETE_PRODUCT } from '../actions/products';

const initialState = {
    availableProducts: PRODUCTS, //Initialize availableProducts with the PRODUCTS imported from dummy-data.js 
    hotProducts: PRODUCTS.filter(prod => prod.prodId === 'hot'),//Only show products that are hot
    coldProducts: PRODUCTS.filter(prod => prod.prodId === 'cold'),//Only show products that are cold
    pastryProducts: PRODUCTS.filter(prod => prod.prodId === 'pastry')//Only show products that are pastries
    
}

export default (state = initialState, action) => {
    switch (action.type) {
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