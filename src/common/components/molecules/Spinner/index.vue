<template>
	<div class="vld-parent" v-if="loadingStatus">
		<loading
			v-model:active="active"
			:can-cancel="canCancel"
			:is-full-page="fullPage"
			:height="height"
			:width="width"
			:color="color"
			:loader="loader"
			:background-color="bgColor"
			:transition="transition"
		>
		</loading>
	</div>
</template>

<script lang="ts">
import store from '@/store';
import { loadingSpinner } from '@/store/modules/loading/types';
import { defineComponent, ref, watch } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default defineComponent({
	name: 'loading-spinner',
	components: { Loading },
	props: {
		loadingStatus: {
			type: Boolean,
			required: true,
		},
	},
	setup(props) {
		const active = ref(store.getters[loadingSpinner.getters.GET_STATUS]);
		const fullPage = ref(true);
		const timeout = ref(3000);

		watch(active, () => {
			active.value = store.getters[loadingSpinner.getters.GET_STATUS];
		});

		return {
			active: active,
			fullPage: fullPage,
			canCancel: false,
			useSlot: false,
			loader: 'spinner',
			color: '#d5e0e3',
			bgColor: '#525b5e',
			height: 50,
			width: 50,
			timeout: timeout, //ms
			transition: 'fade',
		};
	},
});
</script>

<style scoped></style>
