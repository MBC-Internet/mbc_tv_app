<template>
	<div class="wrap_onair">
		<Banner v-if="topBanner" :topBanner="topBanner" />
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Banner from '@/common/components/molecules/Banner/index.vue';
import { MbcDataInterface } from '@/types';
import { fetchTopBanner } from '@/api/modules/onair/onairAPI';

export default defineComponent({
	name: 'onair',
	components: { Banner },
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

		return {
			...toRefs(state),
		};
	},
});
</script>

<style scoped></style>
