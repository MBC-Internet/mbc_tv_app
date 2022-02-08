import { fetchGNB } from '@/api/modules/gnb/gnbAPI';
import { Menu } from '@/types/common';
import { gnbType } from './types';

const actions = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	async [gnbType.actions.FETCH_GNB](context: {
		commit: (arg0: any, arg1: Menu[]) => void;
	}) {
		const { data } = await fetchGNB();
		context.commit(gnbType.mutations.SET_GNB, data);
		return data;
	},
};

type Actions = typeof actions;

export { actions, Actions };
