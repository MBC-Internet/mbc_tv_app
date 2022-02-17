<template>
	<div>
		<PartialList
			v-if="sportsList.length > 0"
			onAirTitle="스포츠"
			:scheduleList="sportsList"
		/>
		<PartialList v-if="tvList" onAirTitle="TV" :scheduleList="tvList" />
		<PartialList
			v-if="radioList"
			onAirTitle="라디오"
			:scheduleList="radioList"
		/>
	</div>
</template>

<script lang="ts">
import {
	fetchOnAirListData,
	fetchSportLiveData,
} from '@/api/modules/onair/onairAPI';
import { OnairData, SportsLiveData } from '@/types/onair';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import PartialList from './module/partialList.vue';

export default defineComponent({
	components: { PartialList },
	name: 'onairView',
	setup() {
		const state = reactive({
			onAirTitle: String,
			sportsList: [] as Partial<SportsLiveData[]>,
			schduleList: [] as Partial<OnairData[]>,
		});

		const computedList = reactive({
			tvList: computed(() =>
				state.schduleList.filter(t => t?.Type == 'MBCPLUS' || t?.Type == 'TV'),
			),
			radioList: computed(() =>
				state.schduleList.filter(t => t?.Type == 'RADIO'),
			),
		});

		(async () => {
			try {
				state.sportsList = await (
					await fetchSportLiveData()
				).data.filter(t => t?.IsOnAir == 'Y');
				state.schduleList = await (await fetchOnAirListData()).data;
			} catch (e) {
				state.sportsList = [] as SportsLiveData[];
				state.schduleList = [] as OnairData[];
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
