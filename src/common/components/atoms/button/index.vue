<template>
	<button
		v-if="show"
		type="button"
		:id="buttonId"
		:style="{ backgroundImage: backgroundImage }"
	></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		show: {
			type: Boolean,
			default: true,
		},
		buttonId: {
			type: String,
			default: '',
		},
		backgroundImage: {
			type: String,
			default: '',
		},
	},
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
