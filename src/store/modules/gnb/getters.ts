import { checkMobile } from '@/common/utils/common';
import { gnbState } from '.';

export const getters = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	fetchGnb(state: gnbState) {
		return state.gnb;
	},
};

export type Getters = typeof getters;
