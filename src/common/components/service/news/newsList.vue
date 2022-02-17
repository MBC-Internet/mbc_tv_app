<template>
	<div>
		<div class="visual_top">
			<span class="img">
				<Image
					:imgsrc="mbcNewsLogo.url"
					:imgalt="mbcNewsLogo.name"
					isLazyLoading="false"
				/>
			</span>
			<div class="news_top" v-if="newsTopItems">
				<a>
					<Image
						:imgsrc="newsTopItems.Image"
						:imgalt="newsTopItems.Title"
						isLazyLoading="false"
						default="d"
					/>
					<div class="wrap_txt ellipsis">
						<span class="title" v-html="newsTopItems.Title"></span>
					</div>
				</a>
			</div>
		</div>
		<div class="wrapper news_mid">
			<div class="half" v-for="(item, index) in newsMidItems" :key="index">
				<a>
					<Image
						:imgsrc="item.Image"
						:imgalt="item.Title"
						default="d"
						isLazyLoading="false"
					/>
					<span class="title ellipsis2" v-html="item.Title"></span>
				</a>
			</div>
		</div>
		<div class="wrapper news_list">
			<ul>
				<li
					class="ellipsis"
					v-for="(item, index) in newsListItems"
					:key="index"
				>
					<a v-html="item.Title"></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Image from '@/common/components/atoms/Image/index.vue';
import { mbcNewsLogo } from '@/common/modules/images/index';
import { News } from '@/types/news';
import { computed, defineComponent, PropType, reactive, toRefs } from 'vue';

export default defineComponent({
	name: 'newsList',
	components: { Image },
	props: {
		news: {
			type: Object as PropType<News[]>,
			required: true,
			default: (): News[] => new Array<News>(),
		},
	},
	setup(props) {
		const state = reactive({
			newsTopItems: computed((): News => props.news[0]),
			newsMidItems: computed((): News[] => props.news.slice(1, 3)),
			newsListItems: computed((): News[] => props.news.slice(2)),
		});

		return {
			...toRefs(state),
			mbcNewsLogo,
		};
	},
});
</script>

<style scoped></style>
