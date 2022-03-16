<template>
	<div>
		<h2 class="b_title">{{ vodTitle }}</h2>
		<div class="type_row" :id="vodIndex" ref="row">
			<div class="slide">
				<ul ref="vodUl">
					<li class="vod" v-for="(item, index) in vodItem" v-bind:key="index">
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
						<span class="img">
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
import { defineComponent, PropType } from 'vue';
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
		return {};
	},
});
</script>

<style scoped></style>
