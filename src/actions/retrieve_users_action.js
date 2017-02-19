import axios from 'axios';

export const RETRIEVE_USERS = 'RETRIEVE_USERS';

export const retrieveUsersAction = () => {
	const url = 'https://randomuser.me/api/?results=10'
	const request = axios.get(url);

	return {
		type: RETRIEVE_USERS,
		payload: request
	};
}