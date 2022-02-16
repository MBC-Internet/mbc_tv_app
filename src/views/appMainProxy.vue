<template>
	<div v-cloak id="container">
		<h1 class="blind">MBC 홈</h1>
		<GNB class="gnb" />
		<Spinner :loadingStatus="loadingStatus" />
		<div class="app-body">
			<router-view></router-view>
		</div>
		<UpBtn />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue';
import store from '@/store';
import GNB from '@/common/modules/navigations/gnb/GNB.vue';
import Spinner from '@/common/components/molecules/Spinner/index.vue';
import UpBtn from '@/common/components/molecules/UpBtn/index.vue';
import { loadingSpinner } from '@/store/modules/loading/types';

export default defineComponent({
	name: 'mbcappProxy',
	components: { GNB, UpBtn, Spinner },
	setup() {
		const loadingStatus = ref(store.getters[loadingSpinner.getters.GET_STATUS]);

		return {
			loadingStatus,
		};
	},
});
</script>

<style scoped>
@import url('~@/assets/css/common.css');
</style>
