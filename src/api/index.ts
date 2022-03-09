/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDateFormat } from '@/common/utils/common';
import { AxiosResponse } from 'axios';
import instance from './interceptors/interceptors';

export const config = {
	controlUrl: `${process.env.VUE_APP_CONTROL_API}`,
	playVodUrl: `${process.env.VUE_APP_PLAYVOD_API}`,
	mediaUrl: `${process.env.VUE_APP_MEDIA_API}`,
};

export const enum ScheduleBannerCategory {
	ONAIR = 1,
	MBICLIVE = 2,
}

export const date = getDateFormat();

export const ApiService = {
	get(uri: string): Promise<AxiosResponse<any, any>> {
		return instance.get(uri);
	},
	post(uri: string, params: any): Promise<AxiosResponse<any, any>> {
		return instance.post(`${uri}`, params);
	},
	put(uri: string, params: any): Promise<AxiosResponse<any, any>> {
		return instance.put(`${uri}`, params);
	},
	delete(uri: string): Promise<AxiosResponse<any, any>> {
		return instance.delete(`${uri}`);
	},
};

export const ApiMediaService = {
	get(uri: string): Promise<AxiosResponse<any, any>> {
		return instance.get(uri);
	},
	post(uri: string, params: any): Promise<AxiosResponse<any, any>> {
		return instance.post(`${uri}`, params);
	},
	put(uri: string, params: any): Promise<AxiosResponse<any, any>> {
		return instance.put(`${uri}`, params);
	},
	delete(uri: string): Promise<AxiosResponse<any, any>> {
		return instance.delete(`${uri}`);
	},
};
