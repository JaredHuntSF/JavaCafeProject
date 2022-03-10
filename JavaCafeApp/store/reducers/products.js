import PRODUCTS from "../../data/dummy-data";

const initialState = {
    availableProducts: PRODUCTS, //Initialize availableProducts with the PRODUCTS imported from dummy-data.js 
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')//Same as above but filters by a specific userID
}

export default (state = initialState, action) => {
    return state;
}//get state from initialState