import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cartItem";
import { ADD_ORDER } from "../actions/orders";

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

            let cartItemHandling; //Handles cart items based on whether or not they are new items being added or an item already in the cart is being further added

            if (state.items[addedProduct.id]) {
                //Item is already in cart
                cartItemHandling = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
                
            } else {
                cartItemHandling = new CartItem(1, prodPrice, prodTitle, prodPrice)
                
            }
            return {
                ...state, //return a copy of state
                items: { ...state.items, [addedProduct.id]: cartItemHandling },
                totalAmount: state.totalAmount + prodPrice
            };

        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            if (currentQty > 1)
            {
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                updatedCartItems = {...state.items, [action.pid]: updatedCartItem}
            }
            else
            {
                updatedCartItems = {...state.items};
                delete updatedCartItems[action.pid]
            }
            return{
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            }
            case ADD_ORDER:
                return initialState; //Returning initial state here as a way to clear the cart when the user presses the "submit order" button since initial state is empty (as seen at the top of this file)

    }
    return state;
}


