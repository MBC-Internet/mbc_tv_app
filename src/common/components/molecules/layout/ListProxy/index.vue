<template>
	<!--IOnAirListSchema-->
	<div v-if="listData" class="wrapper thumb_list">
		<ul>
			<li class="vod" v-for="(item, index) in listData" :key="index">
				<span class="img">
					<Image
						:imgsrc="item.OnAirImage || item.WidthImage"
						:imgalt="item.Title"
						default="d"
					/>
					<Bar :percetageTime="item.percentTime" />
					<span
						class="vod_btn_play"
						:style="{ backgroundImage: backgroundImage }"
					></span>
				</span>
				<div>
					<span class="title ellipsis2" v-html="item.Title"></span>
					<span
						class="program ellipsis"
						v-html="item.TypeTitle || item.OnAirAttr"
					></span>
					<span class="writer">
						{{
							timeGetter(
								item.StartTime || item.StartDate,
								item.EndTime || item.EndDate,
							)
						}}
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	onMounted,
	PropType,
	reactive,
	toRefs,
} from 'vue';
import { vodPlayBtn } from '@/common/modules/images';
import Image from '@/common/components/atoms/Image/index.vue';
import Bar from '@/common/components/atoms/Bar/index.vue';
import { IOnAirListSchema, ISportsListSchema } from '@/types';
import store from '@/store';
import { loadingSpinner } from '@/store/modules/loading/types';

export default defineComponent({
	components: { Image, Bar },
	props: {
		listData: {
			type: [] as PropType<IOnAirListSchema[]> | PropType<ISportsListSchema[]>,
			required: false,
		},
	},
	setup(props) {
		const state = reactive({
			backgroundImage: computed(() => vodPlayBtn.url),
		});

		const timeGetter = (startTime: string, endTime: string) => {
			let str = '';
			try {
				if (startTime.length > 4) {
					str = `${startTime.substring(11, 13).slice(0, 2)}:${startTime
						.substring(12)
						.slice(2)}~${endTime.substring(11, 13).slice(0, 2)}:${endTime
						.substring(12)
						.slice(2)}`;
				} else {
					str = `${startTime.slice(0, 2)}:${startTime.slice(2, 4)}
						~
						${endTime.slice(0, 2)}:${endTime.slice(2, 4)}`;
				}
			} catch (e) {
				str = '';
			}
			return str;
		};

		return {
			...toRefs(state),
			timeGetter,
		};
	},
});
</script>

<style scoped></style>
