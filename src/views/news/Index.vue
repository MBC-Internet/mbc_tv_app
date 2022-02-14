<template>
	<div class="wrap_news">
		<newsList v-show="newsList" :news="newsList"></newsList>
		<newsDeskList v-show="newsDeskList" :newsDesk="newsDeskList"></newsDeskList>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { News, NewsDesk } from '@/types/news';
import newsList from '@/common/components/service/news/newsList.vue';
import newsDeskList from '@/common/components/service/news/newsDeskList.vue';
import { fetchNews, fetchNewsDesk } from '@/api/modules/news/newsAPI';

export default defineComponent({
	name: 'news',
	components: { newsList, newsDeskList },
	setup() {
		const state = reactive({
			newsList: [] as News[],
			newsDeskList: [] as NewsDesk[],
		});

		(async () => {
			state.newsList = await (await fetchNews()).data.Data;
			state.newsDeskList = await (await fetchNewsDesk()).data.Data;
		})();

		return {
			...toRefs(state),
		};
	},
});
</script>

<style scoped>
@import url('~@/assets/css/sub.css');
</style>
