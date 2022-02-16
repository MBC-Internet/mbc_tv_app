<template>
	<div class="wrap_banner" v-if="bannerInfo">
		<h2 class="blind">홍보 배너</h2>
		<a>
			<Image
				:imgsrc="bannerInfo.Image"
				:imgalt="bannerInfo.Title"
				default="d"
			/>
			<div class="banner_txt">
				<p class="title" v-html="bannerInfo.Title"></p>
				<p class="date" v-html="bannerInfo.Desc"></p>
			</div>
		</a>
	</div>
</template>

<script lang="ts">
import { MbcDataInterface } from '@/types';
import { computed, defineComponent, PropType } from 'vue';
import Image from '@/common/components/atoms/Image/index.vue';

export default defineComponent({
	components: { Image },
	props: {
		topBanner: {
			type: Object as PropType<MbcDataInterface>,
			required: true,
		},
	},
	setup(props) {
		const bannerInfo = computed(() => props.topBanner.Info);

		return {
			bannerInfo,
		};
	},
});
</script>

<style scoped></style>
