<template>
	<div class="wrap_onair">
		<Banner v-if="topBanner" :topBanner="topBanner" />
		<OnAirView />
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Banner from '@/common/components/molecules/Banner/index.vue';
import OnAirView from '@/common/components/service/onair/index.vue';
import { MbcDataInterface } from '@/types';
import { fetchTopBanner } from '@/api/modules/onair/onairAPI';
import { offSpinner } from '@/common/modules/hook/index';

export default defineComponent({
	name: 'onair',
	components: { Banner, OnAirView },
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
