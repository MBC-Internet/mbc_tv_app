<template>
	<a @click="moveTop">
		<transition name="fade">
			<Button
				class="scroll-top"
				:show="show"
				:buttonId="buttonId"
				:backgroundImage="backgroundImage"
			/>
		</transition>
	</a>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	onBeforeMount,
	reactive,
	toRefs,
} from 'vue';
import Button from '@/common/components/atoms/Button/index.vue';
import { upBtnImg } from '@/common/modules/images';

export default defineComponent({
	components: { Button },
	setup() {
		const state = reactive({
			show: false,
			buttonId: 'scrollTop',
			backgroundImage: computed(() => upBtnImg.url),
		});

		const handleScroll = () => {
			window.scrollY > 20 ? (state.show = true) : (state.show = false);
		};

		onBeforeMount(() => {
			window.addEventListener('scroll', handleScroll);
		});

		const moveTop = () => window.scrollTo(0, 0);

		return {
			...toRefs(state),
			handleScroll,
			moveTop,
		};
	},
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
