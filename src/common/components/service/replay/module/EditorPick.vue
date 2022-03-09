<template>
	<!-- Editor's Pick -->
	<div class="wrap_editor type_row">
		<h2 class="b_title">Editor's pick</h2>
		<span
			class="tit_info"
			v-html="editorPickList[0]?.List[editorPickList[0]?.editorIdx].EditorTitle"
		></span>
		<ul>
			<li
				class="vod"
				v-for="(item, index) in editorPickList[0]?.List[
					editorPickList[0]?.editorIdx
				]?.List"
				v-bind:key="index"
			>
				<span class="img"
					><Image :imgsrc="item.Image" :imgalt="item.Title" default="d"
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
				backgroundImage: `url('../../../assets/images/btn_refresh.png')`,
			}"
		>
			다음 콘텐츠 보기 {{ editorPickList.editorIdx + 1 }}/{{
				editorPickList.totalCnt
			}}
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Image from '@/common/components/atoms/Image/index.vue';
import { EditorPickList } from '@/types/replay';

export default defineComponent({
	components: {
		Image,
	},
	props: {
		editorPickList: {
			type: [] as PropType<EditorPickList>,
			required: true,
		},
	},
	setup(props) {
		const editorIdxCnt = () => {
			if (props.editorPickList.editorIdx >= 7) {
				// eslint-disable-next-line vue/no-mutating-props
				props.editorPickList.editorIdx = 0;
			} else {
				// eslint-disable-next-line vue/no-mutating-props
				props.editorPickList.editorIdx = props.editorPickList.editorIdx + 1;
			}
		};
		return {
			editorIdxCnt,
		};
	},
});
</script>

<style scoped></style>
