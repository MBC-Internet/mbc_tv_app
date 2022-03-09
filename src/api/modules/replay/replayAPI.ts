import { AxiosPromise } from 'axios';
import {
	ApiMediaService,
	ApiService,
	date,
	ScheduleBannerCategory,
} from '@/api/index';
import { MbcDataInterface } from '@/types';
import store from '@/store';
import {
	BestVod,
	EditorPickList,
	NewestVod,
	OldRecommendVodProxy,
	PreviewVod,
	ProgramPromotion,
	ProgramPromotionData,
	SketchVod,
	UserSeamProxy,
} from '@/types/replay';

enum promotionInfo {
	contentTopCnt = 12,
	deviceType = 'm',
	day = '7',
}

enum contentType {
	preview = 2,
	sketch = 5,
}

const editorChannelIdx = (): number => {
	return Math.ceil((Math.random() * 10) / 3);
};

const fetchTopBanner = (): AxiosPromise<MbcDataInterface[]> => {
	const request = ApiService.get(
		`/MBCApp/Banner/VOD?date=${date}&type=${
			store.state.userAgent.mobileState
		}&category=${[ScheduleBannerCategory.ONAIR]}`,
	);
	return request;
};

const fetchProgramPromotion = (): AxiosPromise<ProgramPromotion[]> => {
	const request = ApiService.get(
		`/WebApi/Main/ProgramPromotion?date=${date}&deviceType=${promotionInfo.deviceType}`,
	);
	return request;
};

const fetchProgramPromotionData = (
	bid: string,
): AxiosPromise<ProgramPromotionData[]> => {
	const request = ApiService.get(
		`/WebApi/Main/RelationContent?date=${date}&type=${promotionInfo.contentTopCnt}&deviceType=${promotionInfo.deviceType}&broadcastID=${bid}`,
	);
	return request;
};

const fetchUserSeamData = (): AxiosPromise<UserSeamProxy> => {
	const request = ApiMediaService.get(`/Seamless/UserSeamList?date=${date}`);
	return request;
};

const fetchNewestVOD = (): AxiosPromise<NewestVod[]> => {
	const request = ApiService.get(`/App/V2/VOD/Newest?date=${date}`);
	return request;
};

const fetchBestVOD = (): AxiosPromise<BestVod[]> => {
	const request = ApiService.get(
		`/WebApi/Main/WeekBestVod?date=${date}&type=${promotionInfo.contentTopCnt}&deviceType=${promotionInfo.deviceType}&day=${promotionInfo.day}`,
	);
	return request;
};

const fetchPreviewVOD = (): AxiosPromise<PreviewVod[]> => {
	const request = ApiService.get(
		`/MBCApp/Timeline/ContentType?date=${date}&contentType=${contentType.preview}`,
	);
	return request;
};

const fetchSketchVOD = (): AxiosPromise<SketchVod[]> => {
	const request = ApiService.get(
		`/MBCApp/Timeline/ContentType?date=${date}&contentType=${contentType.sketch}`,
	);
	return request;
};

const fetchEditorPick = (): AxiosPromise<EditorPickList> => {
	const request = ApiService.get(
		`/WebApi/Main/ChannelEditor?date=${date}&deviceType=${
			promotionInfo.deviceType
		}&channel=${editorChannelIdx()}`,
	);
	return request;
};

const fetchOldRecommendVOD = (): AxiosPromise<OldRecommendVodProxy> => {
	const request = ApiService.get(
		`/WebApi/Main/Legend?date=${date}&deviceType=${promotionInfo.deviceType}&channel=0&top=1&opt=N`,
	);
	return request;
};

export {
	fetchTopBanner,
	fetchProgramPromotion,
	fetchProgramPromotionData,
	fetchUserSeamData,
	fetchBestVOD,
	fetchEditorPick,
	fetchNewestVOD,
	fetchOldRecommendVOD,
	fetchPreviewVOD,
	fetchSketchVOD,
};
