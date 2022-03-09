<template>
	<div v-cloak id="container">
		<h1 class="blind">MBC 홈</h1>
		<GNB class="gnb" />
		<div>
			<div v-show="!isLoading" class="app-body">
				<router-view v-slot="{ Component, route }">
					<transition :name="route.meta.transition || 'fade'">
						<component :is="Component" :key="route.name" />
					</transition>
				</router-view>
			</div>
			<div v-show="isLoading">
				<Spinner :isLoading="isLoading" />
			</div>
		</div>
		<UpBtn />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
import store from '@/store';
import GNB from '@/common/modules/navigations/gnb/GNB.vue';
import Spinner from '@/common/components/molecules/Spinner/index.vue';
import UpBtn from '@/common/components/molecules/UpBtn/index.vue';
import { loadingSpinner } from '@/store/modules/loading/types';

export default defineComponent({
	name: 'mbcappProxy',
	components: { GNB, UpBtn, Spinner },
	setup() {
		let isLoading = computed(
			() => store.getters[loadingSpinner.getters.GET_STATUS],
		);

		watch(isLoading, val => {
			isLoading = val;
		});

		return {
			isLoading,
		};
	},
});
</script>

<style scoped>
@import url('~@/assets/css/common.css');

.fade-enter-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
