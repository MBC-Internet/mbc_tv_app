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

export default defineComponent({
	name: 'mbcapp',
	components: { GNB },
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
