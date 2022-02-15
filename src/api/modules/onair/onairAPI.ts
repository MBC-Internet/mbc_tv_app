import { AxiosPromise } from 'axios';
import { ApiService, config, date, ScheduleBannerCategory } from '@/api/index';
import store from '@/store';
import { OnairData } from '@/types/onair';
import { MbcDataInterface } from '@/types';

const fetchTopBanner = (): AxiosPromise<MbcDataInterface[]> => {
	const request = ApiService.get(
		`${config.controlUrl}/MBCApp/Banner/Live
		?date=${date}
		&type=${store.state.userAgent.mobileState}
		&category=${ScheduleBannerCategory.ONAIR}`,
	);
	return request;
};

const fetchOnAirListData = (): AxiosPromise<OnairData[]> => {
	const request = ApiService.get(
		`${config.controlUrl}/Schedule/ONAIRWITHNVOD
		?date=${date}
		`,
	);
	return request;
};

export { fetchTopBanner, fetchOnAirListData };