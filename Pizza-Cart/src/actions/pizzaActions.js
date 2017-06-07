import axios from 'axios';

export const FETCH_PIZZADATA = 'fetch_pizza_data';

const ENDPOINT = 'https://core-graphql.dev.waldo.photos/pizza';
const gql = `{
	pizzaSizes {
		name,
		maxToppings,
		basePrice,
		toppings {
			topping {
				name,
				price
			},
			defaultSelected
		}
	}
}`;


export function fetchPizzaData() {
    const request = axios.post(ENDPOINT,{query:gql});
    return {
        type:FETCH_PIZZADATA,
        payload:request
    }
}



