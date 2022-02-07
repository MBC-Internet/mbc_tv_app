<template>
	<div v-cloak id="app">
		<template v-if="$store.state.display.isInitialized">
			<template v-if="isShowGNB">
				<GNB class="gnb" />
				<div class="app-body"></div>
			</template>
		</template>
	</div>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	getCurrentInstance,
	reactive,
	toRefs,
} from 'vue';

export default defineComponent({
	setup() {
		return {};
	},
});
</script>

<style scoped src=""></style>
