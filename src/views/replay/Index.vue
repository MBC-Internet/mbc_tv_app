<template>
	<div class="wrap_vod">
		<Banner v-if="topBanner" :topBanner="topBanner" />
		<Promotion
			v-if="programPromotion?.BID"
			:programPromotion="programPromotion"
		/>
		<!--MBC 꿀잼방송-->
		<Vod
			v-if="newestVodList.length > 0"
			vodTitle="당신이 놓친 어제 MBC 꿀잼 방송"
			vodIndex="row2"
			:vodItem="newestVodList"
		></Vod>
		<!--MBC 주간 BEST-->
		<Vod
			v-if="bestVodList.length > 0"
			vodTitle="주간 BEST"
			vodIndex="row3"
			:vodItem="bestVodList"
		></Vod>
		<!--예고-->
		<Vod
			v-if="previewVodList"
			vodTitle="예고"
			vodIndex="row4"
			:vodItem="previewVodList"
		></Vod>
		<!--현장스케치-->
		<Vod
			v-if="sketchVodList"
			vodTitle="현장스케치"
			vodIndex="row5"
			:vodItem="sketchVodList"
		></Vod>
		<!-- editorpicks -->
		<EditorPick
			v-if="editorPickList"
			:editorPickList="editorPickList"
		></EditorPick>

		<!-- 구작추천 -->
		<OldRecommend
			v-if="oldRecommendVodList"
			:vodItem="oldRecommendVodList"
		></OldRecommend>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Banner from '@/common/components/molecules/Banner/index.vue';
import Promotion from '@/common/components/service/replay/module/Promotion.vue';
import { MbcDataInterface } from '@/types';
import { offSpinner } from '@/common/modules/hook';
import {
	fetchBestVOD,
	fetchEditorPick,
	fetchNewestVOD,
	fetchOldRecommendVOD,
	fetchPreviewVOD,
	fetchProgramPromotion,
	fetchProgramPromotionData,
	fetchSketchVOD,
	fetchTopBanner,
	fetchUserSeamData,
} from '@/api/modules/replay/replayAPI';
import {
	BestVod,
	EditorPickList,
	NewestVod,
	OldRecommendVodProxy,
	PreviewVod,
	ProgramPromotion,
	ProgramPromotionData,
	SketchVod,
	UserSeamProxy,
} from '@/types/replay';

import Vod from '@/common/components/service/replay/module/Vod.vue';
import OldRecommend from '@/common/components/service/replay/module/OldRecommend.vue';
import EditorPick from '@/common/components/service/replay/module/EditorPick.vue';

export default defineComponent({
	name: 'replay',
	components: { Banner, Promotion, Vod, OldRecommend, EditorPick },
	setup() {
		const state = reactive({
			topBanner: {} as MbcDataInterface,
			programPromotion: {} as ProgramPromotion,
			userSeamList: {} as UserSeamProxy,
			newestVodList: [] as NewestVod[],
			bestVodList: [] as BestVod[],
			previewVodList: [] as PreviewVod[],
			sketchVodList: [] as SketchVod[],
			editorPickList: {} as EditorPickList,
			oldRecommendVodList: {} as OldRecommendVodProxy,
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
				state.newestVodList = await (await fetchNewestVOD()).data;
				state.bestVodList = await (await fetchBestVOD()).data;
				state.previewVodList = await (await fetchPreviewVOD()).data;
				state.sketchVodList = await (await fetchSketchVOD()).data;
				state.editorPickList = await (await fetchEditorPick()).data;
				state.oldRecommendVodList = await (await fetchOldRecommendVOD()).data;
				state.userSeamList = await (await fetchUserSeamData()).data;
			} catch (e) {
				console.log(e);
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
