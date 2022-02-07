import axios, { AxiosInstance, AxiosPromise } from 'axios';

function createInstance(): AxiosInstance {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

export const instance = createInstance();
