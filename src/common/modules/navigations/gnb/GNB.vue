<template>
	<nav class="gnb" ref="gnb">
		<div class="slide">
			<ul ref="gnbUl">
				<GNBMenu
					v-for="(menu, index) in gnbList"
					:ref="setGnbLi"
					:key="index"
					:gnbMenu="menu"
				></GNBMenu>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUpdate, onUpdated, ref } from 'vue';
import GNBMenu from './modules/GNBMenu.vue';
import store from '@/store';
import { gnbType } from '@/store/modules/gnb/types';

const fetchGnbMenu = () => {
	store.dispatch(gnbType.actions.FETCH_GNB);
	const gnbList = computed(() => store.getters[gnbType.getters.GET_GNB]);
	return gnbList;
};

export default defineComponent({
	components: { GNBMenu },
	name: 'gnb',
	setup() {
		const LI_PADDING = 16;
		const UL_PADDING = 2;
		const gnbUl = ref<HTMLUListElement>();
		const gnbLength = computed(() => gnbList.value.length);
		const gnbList = fetchGnbMenu();
		let gnbLiArr: Array<Element> = [];

		const setGnbLi = (el: any) => {
			if (el) gnbLiArr.push(el);
		};

		const defineGnbWidth = (
			gnbUl: any,
			gnbLiArr: Array<any>,
			gnbLength: number,
		) => {
			const liMargin = computed(() => (gnbLength - 1) * LI_PADDING);
			let liWidth = ref(0);

			gnbLiArr.forEach(proxy => {
				liWidth.value += proxy.$el.offsetWidth;
			});

			gnbUl.value.style['width'] = `${
				liWidth.value + liMargin.value + UL_PADDING
			}px`;
		};

		onBeforeUpdate(() => {
			gnbLiArr = [];
		});

		onUpdated(() => {
			defineGnbWidth(gnbUl, gnbLiArr, gnbLength.value);
		});

		return {
			gnbList,
			gnbLiArr,
			setGnbLi,
			gnbUl,
		};
	},
});
</script>
