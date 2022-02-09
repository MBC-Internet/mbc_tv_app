<template>
	<li class="gnb-menu" :class="{ on: isActive }" ref="menuLi">
		<router-link v-if="isGNB" :to="gnbMenu.Link">
			<a v-html="gnbMenu.MenuName"></a>
		</router-link>
		<a v-else v-html="gnbMenu.MenuName"></a>
	</li>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUpdate, PropType, ref } from 'vue';
import { Menu } from '@/types/common';
import { useRoute } from 'vue-router';

export default defineComponent({
	name: 'gnbMenu',
	emits: ['movingGNB'],
	props: {
		gnbMenu: {
			type: Object as PropType<Menu>,
			required: true,
		},
	},
	setup(props, { emit }) {
		const route = useRoute();
		const menuLi = ref();

		const isGNB = computed((): boolean =>
			props.gnbMenu.WebLinkPos == 'GNB' ? true : false,
		);
		const isActive = computed((): boolean => {
			return isGNB.value && route.path == props.gnbMenu.Link;
		});

		onBeforeUpdate(() => {
			const li = menuLi.value as HTMLLIElement;
			if (isActive.value) {
				const windowWidth = computed(() => window.innerWidth / 2);
				const move = li.offsetLeft;
				const thisWidth = li.offsetWidth / 2;
				const scrollMove = move - windowWidth.value + thisWidth;
				const isOffset: boolean = move > windowWidth.value;
				emit('movingGNB', isOffset, scrollMove);
			}
		});

		return {
			isGNB,
			isActive,
			menuLi,
		};
	},
});
</script>

<style scoped>
.gnb-menu a {
	white-space: nowrap;
}
</style>
