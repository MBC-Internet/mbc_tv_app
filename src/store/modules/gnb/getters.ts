/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Menu } from '@/types/common';
import { gnbState } from '.';
import { gnbType } from './types';

export const getters = {
	[gnbType.getters.GET_GNB](state: gnbState): Menu[] {
		return state.gnb;
	},
};

export type Getters = typeof getters;
