import { AxiosPromise } from 'axios';
import { ApiService, config } from '@/api/index';
import { getDateFormat } from '@/common/utils/common';
import { Menu } from '@/types/common';

const date = getDateFormat();

const fetchGNB = (): AxiosPromise<Menu[]> => {
	const request = ApiService.get(
		`${config.controlUrl}/MBCApp/GNB?date=${date}`,
	);
	return request;
};

export { fetchGNB };
