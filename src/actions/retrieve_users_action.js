import axios from 'axios';

export const RETRIEVE_USERS = 'RETRIEVE_USERS';

const retrieveUsers = function() {
	const url = 'https://randomuser.me/api/?results=10'
	const response = axios.get(url);

	return {
		action: RETRIEVE_USERS,
		payload: response
	};
};

export default retrieveUsers;