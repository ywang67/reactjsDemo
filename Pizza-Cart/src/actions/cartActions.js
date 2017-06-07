
export const ADD_TO_CART = 'add_to_cart';
export const DELETE_CART_ITEM = 'delete_cart_item';


export function addToCart(pizza) {
    return {
        type:ADD_TO_CART,
        payload:pizza
    }
}


export function deleteCartItem(cart) {
    return {
        type:"DELETE_CART_ITEM",
        payload:cart
    }
}