import { createStore } from 'vuex';
import { gnb, gnbState } from './modules/gnb';
import { userAgent, userAgentState } from './modules/userAgent';

export interface RootState {
	userAgent: userAgentState;
	gnb: gnbState;
	//user: userState;
}

export default createStore({
	modules: { userAgent, gnb },
});
