<template>
	<AppMainProxy />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppMainProxy from '@/views/appMainProxy.vue';

export default defineComponent({
	name: 'mbcapp',
	components: { AppMainProxy },
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
