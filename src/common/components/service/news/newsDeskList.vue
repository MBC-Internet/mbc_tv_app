<template>
	<div>
		<!--MBC NEWSDESK-->
		<div class="newsdesk" v-show="newsDesk.length > 0">
			<div class="ch_info">
				<span class="img"
					><Image :imgsrc="mbcNewsDeskLogo.url" :imgalt="mbcNewsDeskLogo.name"
				/></span>
				<div class="txt_info">
					<span class="title">뉴스데스크</span>
					<span class="date">{{ newsToday }}</span>
				</div>
			</div>
			<div class="wrapper thumb_list" v-if="sortedNewsDesks.length > 0">
				<ul>
					<li
						:data-title="item.Title"
						v-for="(item, index) in sortedNewsDesks"
						:key="index"
					>
						<span class="img"
							><Image :imgsrc="item.Image" :imgalt="item.Title" default="d"
						/></span>
						<div>
							<span class="title ellipsis2" v-html="item.Title"></span>
							<span class="writer" v-html="item.Section"></span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { mbcNewsDeskLogo } from '@/common/modules/images/index';
import Image from '@/common/components/atoms/Image/index.vue';
import { NewsDesk } from '@/types/news';
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'newsDeskList',
	components: { Image },
	props: {
		newsDesk: {
			type: Object as PropType<NewsDesk[]>,
			required: true,
		},
	},
	setup(props) {
		const sortedNewsDesks = computed(() => props.newsDesk.slice().reverse());
		const newsToday = computed(() =>
			sortedNewsDesks.value.length > 0
				? sortedNewsDesks.value[0].StartDate
				: '',
		);
		return {
			mbcNewsDeskLogo,
			sortedNewsDesks,
			newsToday,
		};
	},
});
</script>

<style scoped></style>
