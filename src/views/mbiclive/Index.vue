<template>
	<div class="wrap-mbic">
		<Banner v-if="topBanner" :topBanner="topBanner" />
		<MbicLiveList />
	</div>
</template>

<script lang="ts">
import { fetchTopBanner } from '@/api/modules/mbiclive/mbicliveAPI';
import Banner from '@/common/components/molecules/Banner/index.vue';
import MbicLiveList from '@/common/components/service/mbicLive/mbicLiveList.vue';
import { MbcDataInterface } from '@/types';
import { defineComponent, reactive, toRefs } from 'vue';

import { offSpinner } from '@/common/modules/hook/index';
export default defineComponent({
	name: 'mbivlive',
	components: { Banner, MbicLiveList },
	setup() {
		const state = reactive({
			topBanner: {} as MbcDataInterface,
		});

		(async () => {
			try {
				state.topBanner = await (await fetchTopBanner()).data[0];
			} catch (e) {
				state.topBanner = {} as MbcDataInterface;
			}
		})();
		offSpinner();
		return {
			...toRefs(state),
		};
	},
});
</script>

<style scoped>
@import url('~@/assets/css/sub.css');
</style>
