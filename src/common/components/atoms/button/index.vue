<template>
	<button
		v-if="show"
		type="button"
		:id="buttonId"
		:class="buttonClass"
		:style="{ backgroundImage: backgroundImage }"
	>
		{{ buttonText }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		show: {
			type: Boolean,
			default: true,
			require: false,
		},
		buttonId: {
			type: String,
			required: false,
			default: '',
		},
		backgroundImage: {
			type: String,
			required: false,
			default: '',
		},
		buttonText: {
			type: String,
			required: false,
			default: '',
		},
		buttonClass: {
			type: String,
			required: false,
			default: '',
		},
	},
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
