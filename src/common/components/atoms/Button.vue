<template>
	<button
		v-if="show"
		type="button"
		class="scroll-top"
		:id="buttonId"
		:style="{ backgroundImage: backgroundImage }"
	>
		상단으로 이동
	</button>
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
	setup(props) {
		return {};
	},
});
</script>

<style scoped></style>
