<template>
	<nav class="gnb" ref="gnb">
		<div class="slide">
			<ul ref="gnbUl">
				<GNBMenu
					v-for="(menu, index) in gnbList"
					ref="gnbLi"
					:key="index"
					:gnbMenu="menu"
				></GNBMenu>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUpdated, ref } from 'vue';
import GNBMenu from './modules/GNBMenu.vue';
import store from '@/store';
import { gnbType } from '@/store/modules/gnb/types';

const setGnb = () => {
	store.dispatch(gnbType.actions.FETCH_GNB);
	const gnbList = computed(() => store.getters[gnbType.getters.GET_GNB]);
	return { gnbList };
};

export default defineComponent({
	components: { GNBMenu },
	name: 'gnb',
	setup() {
		const gnbUl = ref<HTMLUListElement>();
		const gnbLi = ref<HTMLLIElement>();

		onMounted(() => {
			const ul = gnbUl.value as HTMLUListElement;
			const li = gnbLi.value as HTMLLIElement;
		});
		return {
			...setGnb(),
			gnbUl,
			gnbLi,
		};
	},
});
</script>
