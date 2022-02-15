import { reactive, toRefs } from 'vue';
import { defaultDramaThumbnail } from '@/common/modules/images/index';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useLazyOptions = (
	imgSrc: string,
	errorSrc: any,
	loadingSrc?: string,
) => {
	const lazyOptions = reactive({
		src: imgSrc,
		loading: loadingSrc || defaultDramaThumbnail.url,
		error: errorSrc || defaultDramaThumbnail.url,
		lifecycle: {
			loading: (el: HTMLImageElement) => {
				console.log('image loading', el);
			},
			error: (el: HTMLImageElement) => {
				console.log('image error', el);
			},
			loaded: (el: HTMLImageElement) => {
				console.log('image loaded', el);
			},
		},
	});
	return {
		...toRefs(lazyOptions),
	};
};
