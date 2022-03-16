<template>
	<!-- Editor's Pick -->
	<div class="wrap_editor type_row">
		<h2 class="b_title">Editor's pick</h2>
		<span
			class="tit_info"
			v-html="editorPickList[editorIdx || 0]?.EditorTitle"
		></span>
		<ul>
			<li
				class="vod"
				v-for="(item, index) in editorPickList[editorIdx || 0]?.List"
				v-bind:key="index"
			>
				<span class="img"
					><Image
						:imgsrc="item.Image"
						:imgalt="item.Title"
						:isLazyLoading="false"
				/></span>
				<div class="txt">
					<span class="title ellipsis" v-html="item.Title"></span>
					<span class="program"></span>
				</div>
			</li>
		</ul>
		<button
			v-on:click="editorIdxCnt"
			type="button"
			class="btn_refresh"
			:style="{
				backgroundImage: vodRefresh,
			}"
		>
			다음 콘텐츠 보기 {{ (editorIdx || 0) + 1 }}/{{ editorTotalCnt }}
		</button>
	</div>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	PropType,
	reactive,
	ref,
	toRefs,
} from 'vue';
import Image from '@/common/components/atoms/Image/index.vue';
import { EditorPick } from '@/types/replay';
import { vodRefresh } from '@/common/modules/images/index';

export default defineComponent({
	components: {
		Image,
	},
	props: {
		editorPickList: {
			type: [] as PropType<EditorPick[]>,
			required: true,
		},
	},
	setup(props) {
		const state = reactive({
			editorIdx: ref(0),
			editorTitle: String,
			editorTotalCnt: computed(() => props.editorPickList.length),
		});
		const editorIdxCnt = () => {
			if (state.editorIdx >= 7) {
				// eslint-disable-next-line vue/no-mutating-props
				state.editorIdx = 0;
			} else {
				// eslint-disable-next-line vue/no-mutating-props
				state.editorIdx = state.editorIdx + 1;
			}
		};
		return {
			...toRefs(state),
			editorIdxCnt,
		};
	},
});
</script>

<style scoped></style>
