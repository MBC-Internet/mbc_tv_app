import { AxiosPromise } from 'axios';
import { ApiService, date } from '@/api/index';
import { Menu } from '@/types/common';

const fetchGNB = (): AxiosPromise<Menu[]> => {
	const request = ApiService.get(`/MBCApp/GNB?date=${date}`);
	return request;
};

export { fetchGNB };
