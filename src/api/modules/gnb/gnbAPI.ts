import { AxiosPromise } from 'axios';
import { ApiService, config, date } from '@/api/index';
import { Menu } from '@/types/common';

const fetchGNB = (): AxiosPromise<Menu[]> => {
	const request = ApiService.get(
		`${config.controlUrl}/MBCApp/GNB?date=${date}`,
	);
	return request;
};

export { fetchGNB };
