<template>
	<li>
		<router-link v-if="item.weblinkpos == 'GNB'" :to="item.link">
			<a
				v-on:click="stateChange(index)"
				v-html="item.menuName"
				style="white-space: nowrap"
			></a>
		</router-link>
		<a
			v-else
			v-on:click="clickGNBInterface(item.weblinkpos, item.link, item.menuName)"
			style="white-space: nowrap"
			>{{ item.menuName }}</a
		>
	</li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
