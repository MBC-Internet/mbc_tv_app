import { instance } from '../instance/index.instance';

instance.interceptors.request.use(
	config => {
		//store.commit(loadingSpinner.mutations.OFF_SPINNER);
		return config;
	},
	error => {
		console.log('data fetch error');
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	response => {
		//store.commit(loadingSpinner.mutations.OFF_SPINNER);
		return response;
	},
	error => {
		console.log('data fetch error');
		return Promise.reject(error);
	},
);

export default instance;
