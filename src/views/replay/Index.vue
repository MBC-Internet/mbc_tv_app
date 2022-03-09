<template>
	<div class="wrap_vod">
		<Banner v-if="topBanner" :topBanner="topBanner" />
		<Promotion
			v-if="programPromotion.BID"
			:programPromotion="programPromotion"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Banner from '@/common/components/molecules/Banner/index.vue';
import Promotion from '@/common/components/service/replay/module/Promotion.vue';
import { MbcDataInterface } from '@/types';
import { offSpinner } from '@/common/modules/hook';
import {
	fetchProgramPromotion,
	fetchProgramPromotionData,
	fetchTopBanner,
	fetchUserSeamData,
} from '@/api/modules/replay/replayAPI';
import {
	ProgramPromotion,
	ProgramPromotionData,
	UserSeamProxy,
} from '@/types/replay';

export default defineComponent({
	name: 'replay',
	components: { Banner, Promotion },
	setup() {
		const state = reactive({
			topBanner: {} as MbcDataInterface,
			programPromotion: {} as ProgramPromotion,
			userSeamList: {} as UserSeamProxy,
		});

		(async () => {
			try {
				state.topBanner = await (await fetchTopBanner()).data[0];
				state.programPromotion = await (await fetchProgramPromotion()).data[0];
				if (state.programPromotion) {
					state.programPromotion.RelationContents =
						[] as ProgramPromotionData[];
					state.programPromotion.RelationContents = await (
						await fetchProgramPromotionData(state.programPromotion.BID)
					).data;
				}
				state.userSeamList = await (await fetchUserSeamData()).data;
				state.newsDeskList = await (await fetchNewsDesk()).data.Data;
			} catch (e) {
				state.topBanner = {} as MbcDataInterface;
				state.programPromotion = {} as ProgramPromotion;
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
