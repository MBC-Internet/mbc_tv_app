<template>
	<!-- 구작 추천 -->
	<div class="wrap_legend">
		<h2 class="b_title">구작추천</h2>
		<div class="type_row type2" id="row6">
			<div class="slide">
				<ul :style="{ width: `${getWidth(vodItem[0]?.List.length)}px` }">
					<li v-for="(item, index) in vodItem[0]?.List" v-bind:key="index">
						<a>
							<span class="img">
								<Image :imgsrc="item.Image" :imgalt="item.Title" default="m"
							/></span>
							<span class="title ellipsis">{{ makeTitle(item.Title) }}</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, toRefs } from 'vue';
import Image from '@/common/components/atoms/Image/index.vue';
import { OldRecommendVodProxy } from '@/types/replay';

export default defineComponent({
	components: {
		Image,
	},
	props: {
		vodItem: {
			type: Object as PropType<OldRecommendVodProxy>,
			required: true,
		},
	},
	setup(props) {
		const LI_MARGIN = 6;

		const makeTitle = (e: string) => e.substring(1);
		const getWidth = (n: number) => 110 * n + LI_MARGIN;

		return {
			getWidth,
			makeTitle,
		};
	},
});
</script>

<style scoped></style>
