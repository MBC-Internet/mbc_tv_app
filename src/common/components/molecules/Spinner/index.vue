<template>
	<div class="spinner-container" v-if="isLoading">
		<div class="spinner" />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
	name: 'loading-spinner',
	props: {
		isLoading: {
			type: Boolean,
			required: true,
		},
	},
	setup(props) {
		let active = computed(() => props.isLoading);

		return {
			active,
		};
	},
});
</script>

<style scoped>
.spinner-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 600px;
}
.spinner {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 5px solid #acada6;
	border-bottom: 5px solid #6d6e69;
	animation: spin 1s linear infinite;
	position: relative;
}
@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
