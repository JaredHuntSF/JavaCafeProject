import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cartItem";

const initialState = {
    items: {}, 
    totalAmount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            const addedProduct = action.product; //Get the added product out of the action, this was set up in cart.js action file
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            if (state.items[addedProduct.id]) {
                //Item is already in cart
                const updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
                return {
                    ...state, //return a copy of state
                    items: { ...state.items, [addedProduct.id]: updatedCartItem },
                    totalAmount: state.totalAmount + prodPrice
                }
            } else {
                const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice)
                return {
                    ...state, //return a copy of state
                    items: {...state.items, [addedProduct.id]: newCartItem },
                    totalAmount: state.totalAmount + prodPrice
                }
            }
    }
    return state;
}