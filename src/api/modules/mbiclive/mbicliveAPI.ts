import axios from 'axios';
import { config } from '@/api/index';
import store from '@/store';
import { getDateFormat } from '@/common/utils/common';

const params = {
	type: store.state.userAgent.mobileState,
	category: 2,
	date: getDateFormat(),
};

const fetchTopBanner = async () => {
	const banner = await axios.get(`${config.controlUrl}/MBCApp/Banner/Live`, {
		params,
	});
	return banner;
};

export { fetchTopBanner };
