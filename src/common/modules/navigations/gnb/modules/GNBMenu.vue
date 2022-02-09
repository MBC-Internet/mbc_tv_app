<template>
	<li class="gnb-menu" :class="{ on: isActive }">
		<router-link v-if="isGNB" :to="gnbMenu.Link">
			<a v-html="gnbMenu.MenuName"></a>
		</router-link>
		<a v-else v-html="gnbMenu.MenuName"></a>
	</li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Menu } from '@/types/common';
import { useRoute } from 'vue-router';

export default defineComponent({
	name: 'gnbMenu',
	props: {
		gnbMenu: {
			type: Object as PropType<Menu>,
			required: true,
		},
	},
	setup(props) {
		const route = useRoute();
		const isGNB = computed((): boolean =>
			props.gnbMenu.WebLinkPos == 'GNB' ? true : false,
		);
		const isActive = computed((): boolean => {
			return isGNB.value && route.path == props.gnbMenu.Link;
		});

		return {
			isGNB,
			isActive,
		};
	},
});
</script>

<style scoped>
.gnb-menu a {
	white-space: nowrap;
}
</style>
