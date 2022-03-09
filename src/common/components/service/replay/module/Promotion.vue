<template>
	<section
		class="wrap_promo"
		:style="{
			'background-image': 'url(' + programPromotion.Image + ')',
			'background-size': '100%',
		}"
	>
		<Button type="button" buttonClass="close-promo" buttonText="접기" />
		<div class="promo-list">
			<div class="type_row" id="promoWrap">
				<div class="slide">
					<ul>
						<li v-for="(item, index) in programPromotion" :key="index">
							<a>
								<span class="img">
									<Image
										:imgsrc="item.Image"
										:imgalt="item.Title"
										default="d"
									/>
								</span>
								<p
									class="txt ellipsis2"
									v-html="item.Title"
									:style="{ color: programPromotion.FontColor || '#bababa' }"
								></p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { ProgramPromotion, ProgramPromotionData } from '@/types/replay';
import { defineComponent, PropType } from 'vue';
import Button from '@/common/components/atoms/Button/index.vue';
import Image from '@/common/components/atoms/Image/index.vue';

export default defineComponent({
	props: {
		programPromotion: {
			type: {} as PropType<ProgramPromotion>,
			required: true,
		},
	},
	components: { Button, Image },
	setup(props) {
		return {};
	},
});
</script>

<style scoped></style>
