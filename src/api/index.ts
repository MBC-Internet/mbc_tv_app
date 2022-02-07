import axios, { AxiosPromise } from 'axios';
import { handlerException } from '@/common/utils/handler';

export const config = {
	controlUrl: '`${process.env.VUE_APP_API_URL}',
	playVodUrl: '`${process.env.VUE_APP_PLAYVOD_API}',
	mediaUrl: '`${process.env. VUE_APP_MEDIA_API}',
};
