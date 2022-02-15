<template>
	<div>
		<PartialList
			v-if="tvList"
			:onAirTitle="onAirTitle"
			:scheduleList="schduleList"
		/>
		<PartialList
			v-if="radioList"
			:onAirTitle="onAirTitle"
			:scheduleList="schduleList"
		/>
	</div>
</template>

<script lang="ts">
import { fetchOnAirListData } from '@/api/modules/onair/onairAPI';
import { mbicLiveData } from '@/types/mbicLive';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import PartialList from './module/partialList.vue';

export default defineComponent({
	components: { PartialList },
	name: 'onairView',
	setup() {
		const state = reactive({
			onAirTitle: String,
			schduleList: [] as Partial<mbicLiveData[]>,
		});

		const computedList = reactive({
			tvList: computed(() =>
				state.schduleList.filter(t => t?.Type == 'TV' || 'MBCPLUS'),
			),
			radioList: computed(() =>
				state.schduleList.filter(t => t?.Type == 'RADIO'),
			),
		});

		(async () => {
			try {
				state.schduleList = await (await fetchOnAirListData()).data;
			} catch (e) {
				state.schduleList = [] as mbicLiveData[];
			}
		})();

		return {
			...toRefs(state),
			...toRefs(computedList),
		};
	},
});
</script>

<style scoped></style>
