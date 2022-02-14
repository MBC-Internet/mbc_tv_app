<template>
	<img :src="imgsrc" :alt="imgalt" @error="replaceDefaultImg" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {
	defaultDramaThumbnail,
	defaultMovieThumbnail,
} from '@/common/modules/images/index';

const defaultImgFactory = (flag: string) => {
	let factoryRes;
	switch (flag) {
		case 'd': // width drama default
			factoryRes = defaultDramaThumbnail;
			break;
		case 'm': // vertical movie default
			factoryRes = defaultMovieThumbnail;
			break;
	}
	return factoryRes;
};

export default defineComponent({
	name: 'Image',
	props: {
		imgsrc: {
			type: String,
			required: true,
			default: '',
		},
		imgalt: {
			type: String,
			required: false,
		},
		default: {
			type: String,
			required: false,
		},
	},
	setup(props) {
		const defaultImg = computed(() => defaultImgFactory(props.default || 'd'));

		const replaceDefaultImg = (e: { target: { src: string } }) => {
			e.target.src = defaultImg.value?.url;
		};
		return {
			defaultImg,
			replaceDefaultImg,
		};
	},
});
</script>

<style scoped></style>
