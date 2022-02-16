<template>
	<a href="#app">
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

		onBeforeMount(() => window.addEventListener('scroll', handleScroll));

		return {
			...toRefs(state),
			handleScroll,
		};
	},
});
</script>

<style scoped></style>
