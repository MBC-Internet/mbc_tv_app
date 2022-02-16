<template>
	<ListProxy :listData="mbicLiveData" />
</template>

<script lang="ts">
import { fetchMbicLiveListData } from '@/api/modules/mbiclive/mbicliveAPI';
import { mbicLiveData } from '@/types/mbicLive';
import ListProxy from '@/common/components/molecules/layout/ListProxy/index.vue';
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
	components: { ListProxy },
	setup() {
		const state = reactive({
			mbicLiveData: [] as Partial<mbicLiveData>[],
		});

		(async () => {
			try {
				state.mbicLiveData = await (
					await fetchMbicLiveListData()
				).data.filter(x => x.Type === 'NVOD');
			} catch (e) {
				state.mbicLiveData = [] as mbicLiveData[];
			}
		})();

		return {
			...toRefs(state),
		};
	},
});
</script>

<style scoped></style>
