import axios, { AxiosInstance } from 'axios';

function createInstance(): AxiosInstance {
	return axios.create({
		baseURL: process.env.VUE_APP_CONTROL_API,
	});
}
function createVodInstance(): AxiosInstance {
	return axios.create({
		baseURL: process.env.VUE_APP_PLAYVOD_API,
	});
}
function createMediaInstance(): AxiosInstance {
	return axios.create({
		baseURL: process.env.VUE_APP_MEDIA_API,
	});
}

export const instance = createInstance();
export const vod_instance = createVodInstance();
export const media_instance = createMediaInstance();
