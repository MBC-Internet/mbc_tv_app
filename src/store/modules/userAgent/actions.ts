/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { checkMobile } from '@/common/utils/common';
import { saveUserAgentToCookie } from '@/common/utils/cookies';
import { userAgnetType } from './types';

const actions = {
	async [userAgnetType.actions.FETCH_USER_AGENT](context: {
		commit: (arg0: any, arg1: string) => void;
	}) {
		const data = checkMobile();
		context.commit(userAgnetType.mutations.SET_USER_AGENT, data);
		saveUserAgentToCookie(data);
	},
};

type Actions = typeof actions;

export { actions, Actions };
