import axios from 'axios';

const RETRIEVE_USERS = 'RETRIEVE_USERS';

const retrieveUsersAction = () => {
	const url = 'https://randomuser.me/api/?results=10'
	const request = axios.get(url);

	return {
		type: RETRIEVE_USERS,
		payload: request
	};
}

export { 
  RETRIEVE_USERS, 
  retrieveUsersAction
}