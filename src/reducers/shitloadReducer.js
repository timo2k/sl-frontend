import { GET_SHITLOADS, SHITLOADS_LOADING } from '../actions/types';

const initialState = {
	shitloads: null,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_SHITLOADS:
			return {
				...state,
				shitloads: action.payload,
				lodaing: false
			};
		case SHITLOADS_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
