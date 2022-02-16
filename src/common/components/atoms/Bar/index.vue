<template>
	<span class="bar" :style="{ width: computedPercentage }"></span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
	props: {
		percetageTime: {
			type: Number,
			required: true,
		},
	},
	setup(props) {
		const computedPercentage = computed(() => `${props.percetageTime}%`);
		return {
			computedPercentage,
		};
	},
});
</script>

<style scoped></style>
