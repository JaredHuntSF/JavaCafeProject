import PRODUCTS from "../../data/dummy-data";

const initialState = {
    availableProducts: PRODUCTS, //Initialize availableProducts with the PRODUCTS imported from dummy-data.js 
    hotProducts: PRODUCTS.filter(prod => prod.prodId === 'hot'),//Only show products that are hot
    coldProducts: PRODUCTS.filter(prod => prod.prodId === 'cold'),//Only show products that are cold
    pastryProducts: PRODUCTS.filter(prod => prod.prodId === 'pastry')//Only show products that are pastries
    
}

export default (state = initialState, action) => {
    return state;
}//get state from initialState