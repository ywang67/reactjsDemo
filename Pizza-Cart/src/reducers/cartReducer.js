import {ADD_TO_CART} from '../actions/cartActions';


export default function (state={cart:[]}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state,
                cart: action.payload,
                totalPrice: totals(action.payload).total,
            }
            break;
        case "DELETE_CART_ITEM":
            return {...state,
                cart:action.payload,
                totalPrice: totals(action.payload).total,
            }
            break;

        default: return state;
    }
}

// CALCULATE TOTAL
export function totals(payloadArr){

    const totalPrice = payloadArr.map(function(cartArr){
        return cartArr.subTotal * 1;
    }).reduce(function(a, b) {
        return a + b;
    }, 0);


    return {total:totalPrice.toFixed(2)}
}