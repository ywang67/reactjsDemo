import {FETCH_PIZZADATA} from '../actions/pizzaActions';


export default function (state={}, action) {
    switch (action.type) {
        case FETCH_PIZZADATA:
            return action.payload.data.data.pizzaSizes;

        default: return state;
    }
}