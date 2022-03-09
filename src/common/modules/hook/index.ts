import store from '@/store';
import { loadingSpinner } from '@/store/modules/loading/types';
import { onMounted } from 'vue';

const offSpinner = () => {
	onMounted(() =>
		setTimeout(() => store.commit(loadingSpinner.mutations.OFF_SPINNER), 100),
	);
};

export { offSpinner };
