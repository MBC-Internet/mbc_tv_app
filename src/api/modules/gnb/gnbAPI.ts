import axios, { AxiosPromise } from 'axios';
import { config } from '@/api/index';
import { getDateFormat } from '@/common/utils/common';
import { Menu } from '@/types/common';

const params = {
	date: getDateFormat(),
};

const fetchGNB = (): AxiosPromise<Menu[]> => {
	const request = axios.get(`${config.controlUrl}/MBCApp/GNB?`, {
		params,
	});
	return request;
};

export { fetchGNB };
