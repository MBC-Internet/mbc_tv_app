import { AxiosPromise } from 'axios';
import { ApiService, config, date } from '@/api/index';
import { NewsDeskProxy, NewsProxy } from '@/types/news';

const fetchNews = (): AxiosPromise<NewsProxy> => {
	const request = ApiService.get(
		`${config.controlUrl}/WebApi/Main/Imnews?date=${date}`,
	);
	return request;
};

const fetchNewsDesk = (): AxiosPromise<NewsDeskProxy> => {
	const request = ApiService.get(
		`${config.controlUrl}/WebApi/Main/NewsDesk?date=${date}`,
	);
	return request;
};

export { fetchNews, fetchNewsDesk };
