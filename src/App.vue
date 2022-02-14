<template>
	<div v-cloak id="container">
		<h1 class="blind">MBC 홈</h1>
		<upBtn />
		<GNB class="gnb" />
		<div class="app-body">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GNB from '@/common/modules/navigations/gnb/GNB.vue';
import upBtn from '@/common/components/molecules/upBtn/index.vue';

export default defineComponent({
	name: 'mbcapp',
	components: { GNB, upBtn },
	setup() {
		return {};
	},
});
</script>

<style scoped>
@import url('~@/assets/css/common.css');
</style>
