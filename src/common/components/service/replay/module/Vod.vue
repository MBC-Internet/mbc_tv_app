<template>
	<div>
		<h2 class="b_title">{{ vodTitle }}</h2>
		<div class="type_row" :id="vodIndex" ref="row">
			<div class="slide">
				<ul :style="{ width: `${getWidth}px` }">
					<li class="vod" v-for="(item, i) in vodItem" v-bind:key="i">
						<span
							v-if="vodTitle == '주간 BEST' && item.ContentType == 3"
							class="label"
							>핫클립</span
						>
						<span
							v-else-if="vodTitle == '주간 BEST' && item.ContentType != 3"
							class="label"
							>다시보기</span
						>
						<span
							v-else-if="vodIndex === 'row4' || vodIndex === 'row5'"
							class="label"
							>{{ vodTitle }}</span
						>
						<span>
							<Image
								:imgsrc="item.Image || item.Info.Relation.ContentImage"
								:imgalt="item.Title || item.Info.Title"
								default="d"
							/>
						</span>
						<div class="txt">
							<span class="title ellipsis">{{ item.Title }}</span>
							<span v-if="item.ProgramTitle" class="program"
								>{{ item.ProgramTitle }}
								{{
									item.ContentNumber != 0 ? item.ContentNumber + '회' : ''
								}}</span
							>
							<span v-else class="program"
								>{{ item.Info.Program }}
								{{ item.Info.Relation.ContentNumber }}회</span
							>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { MbcDataInterface } from '@/types';
import { IReplayListProxy } from '@/types/replay';
import { computed, defineComponent, PropType, reactive, toRefs } from 'vue';
import Image from '@/common/components/atoms/Image/index.vue';

export default defineComponent({
	components: {
		Image,
	},
	props: {
		vodTitle: {
			type: String,
			required: true,
		},
		vodIndex: {
			type: String,
			required: true,
		},
		vodItem: {
			type: [] as PropType<IReplayListProxy[]> | PropType<MbcDataInterface[]>,
			required: true,
		},
	},
	setup(props) {
		const LI_MARGIN = 6;

		const getWidth = computed(() => {
			var t = 1200;
			if (props.vodItem.length > 0) {
				t = 162 * props.vodItem.length + LI_MARGIN;
			}
			return t;
		});

		const styleObject = reactive({
			width: (getWidth.value || 2000) + ' px',
		});

		return {
			...toRefs(styleObject),
			getWidth,
		};
	},
});
</script>

<style scoped></style>
