<template>
	<!-- 구작 추천 -->
	<div class="wrap_legend">
		<h2 class="b_title">구작추천</h2>
		<div class="type_row type2" id="row6">
			<div class="slide">
				<ul>
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
import { defineComponent, PropType } from 'vue';
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
	setup() {
		const makeTitle = (e: string) => e.substring(1);
		return { makeTitle };
	},
});
</script>

<style scoped></style>
