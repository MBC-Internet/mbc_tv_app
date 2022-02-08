<template>
	<li v-if="gnbMenu.State == 'Y'">
		<router-link v-if="gnbMenu.Weblinkpos == 'GNB'" :to="gnbMenu.Link">
			<a v-html="gnbMenu.MenuName"></a>
		</router-link>
		<a v-else>{{ gnbMenu.MenuName }}</a>
	</li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Menu } from '@/types/common';

export default defineComponent({
	name: 'gnbMenu',
	props: {
		gnbMenu: {
			type: Object as () => Menu,
			required: true,
		},
	},
	setup(props, { emit }) {
		return {};
	},
});
</script>

<style scoped>
a {
	white-space: 'nowrap';
}
</style>
