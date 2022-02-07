import axios, { AxiosPromise } from 'axios';
import { config } from '@/api/index';
import store from '@/store';
import { getDateFormat } from '@/common/utils/common';

const fetchTopBanner = async () => {
	const banner = await axios.get(`${config.controlUrl}/MBCApp/Banner/Live`, {
		params: {
			type: store.state.userAgent.mobileState,
			category: 2,
			date: getDateFormat(),
		},
	});
	return banner;
};

export { fetchTopBanner };
