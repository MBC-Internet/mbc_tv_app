/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDateFormat } from '@/common/utils/common';
import axios, { AxiosResponse } from 'axios';

export const config = {
	controlUrl: `${process.env.VUE_APP_CONTROL_API}`,
	playVodUrl: `${process.env.VUE_APP_PLAYVOD_API}`,
	mediaUrl: `${process.env.VUE_APP_MEDIA_API}`,
};

export const date = getDateFormat();

export const ApiService = {
	get(uri: string): Promise<AxiosResponse<any, any>> {
		return axios.get(uri);
	},
	post(uri: string, params: any): Promise<AxiosResponse<any, any>> {
		return axios.post(`${uri}`, params);
	},
	put(uri: string, params: any): Promise<AxiosResponse<any, any>> {
		return axios.put(`${uri}`, params);
	},
	delete(uri: string): Promise<AxiosResponse<any, any>> {
		return axios.delete(`${uri}`);
	},
};
