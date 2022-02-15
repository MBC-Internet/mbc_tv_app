import { App } from 'vue';
import { lazyLoad } from './module/lazyload';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function (app: App<Element>) {
	// Register global custom directive
	app.directive('lazy-load', lazyLoad);
}
