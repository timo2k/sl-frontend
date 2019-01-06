import axios from 'axios';
import { GET_ERRORS, GET_SHITLOADS, SHITLOADS_LOADING } from './types';

// Create Shitload
export const createShitload = (shitloadData, history) => (dispatch) => {
	axios
		.post('http://localhost:5000/api/v1/shitload', shitloadData)
		.then((res) => history.push('/dashboard'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Get all Shitloads
export const getShitloads = () => (dispatch) => {
	dispatch(setShitloadLoading());
	axios
		.get('http://localhost:5000/api/v1/shitload')
		.then((res) =>
			dispatch({
				type: GET_SHITLOADS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_SHITLOADS,
				payload: {}
			})
		);
};

// Shitload loading
export const setShitloadLoading = () => {
	return {
		type: SHITLOADS_LOADING
	};
};
