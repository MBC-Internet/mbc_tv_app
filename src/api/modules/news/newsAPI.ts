import { AxiosPromise } from 'axios';
import { ApiService, date } from '@/api/index';
import { NewsDeskProxy, NewsProxy } from '@/types/news';

const fetchNews = (): AxiosPromise<NewsProxy> => {
	const request = ApiService.get(`/WebApi/Main/Imnews?date=${date}`);
	return request;
};

const fetchNewsDesk = (): AxiosPromise<NewsDeskProxy> => {
	const request = ApiService.get(`/WebApi/Main/NewsDesk?date=${date}`);
	return request;
};

export { fetchNews, fetchNewsDesk };
