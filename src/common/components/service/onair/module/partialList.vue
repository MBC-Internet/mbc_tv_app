<template>
	<div>
		<h2 class="b_title">{{ onAirTitle }}</h2>
		<ListProxy :listData="scheduleList" />
	</div>
</template>

<script lang="ts">
import { OnairData, SportsLiveData } from '@/types/onair';
import { defineComponent, PropType } from 'vue';
import ListProxy from '@/common/components/molecules/layout/ListProxy/index.vue';

export default defineComponent({
	components: { ListProxy },
	props: {
		onAirTitle: {
			type: String,
			required: true,
		},
		scheduleList: {
			type: [] as PropType<OnairData[]> | PropType<SportsLiveData[]>,
			required: true,
		},
	},
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
