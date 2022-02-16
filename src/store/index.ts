import { createStore } from 'vuex';
import { gnb, gnbState } from './modules/gnb';
import { loading, loadingState } from './modules/loading';
import { userAgent, userAgentState } from './modules/userAgent';

export interface RootState {
	userAgent: userAgentState;
	gnb: gnbState;
	loading: loadingState;
}

export default createStore({
	modules: { userAgent, gnb, loading },
});
