import { GET_ERRORS, SET_CURRENT_USER } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

// Register USer
export const registerUser = (userData, history) => (dispatch) => {
	axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/users/register`, userData)
		.then((res) => history.push('/login'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Login - Get User Token
export const loginUser = (userData) => (dispatch) => {
	axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/users/login`, userData)
		.then((res) => {
			// Save to localStorage
			const { token } = res.data;
			// Set token to ls
			localStorage.setItem('jwtToken', token);
			// Set token 2 auth header
			setAuthToken(token);
			// Decode token 2 get user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Set logged in user
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// Log out user
export const logoutUser = () => (dispatch) => {
	// Remove token from locatl storage
	localStorage.removeItem('jwtToken');
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to {} whitch will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};
