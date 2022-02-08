<template>
	<a href="#app">
		<transition name="fade">
			<Button
				:show="show"
				:buttonId="buttonId"
				:backgroundImage="backgroundImage"
			/>
		</transition>
	</a>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Button from '../atoms/Button.vue';

const upBtnImg = `~@/assets/images/ico_top.png`;

export default defineComponent({
	components: { Button },
	setup() {
		const state = reactive({
			show: true,
			buttonId: 'scrollTop',
			backgroundImage: upBtnImg,
		});
		return {
			...toRefs(state),
		};
	},
});
</script>

<style scoped></style>
