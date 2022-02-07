<template>
	<nav class="gnb" ref="gnb">
		<div class="slide">
			<ul ref="ul">
				<GNBMenu
					v-for="(item, index) in item.gnbList"
					:key="index"
					:class="{ on: index == idx }"
				></GNBMenu>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { Menu } from '@/types/common/index';
import { fetchGNB } from '@/api/modules/gnb/gnbAPI';
import GNBMenu from './modules/GNBMenu.vue';
import { AxiosPromise } from 'axios';
import { Store, useStore } from 'vuex';

const loadGNB = async (): Promise<(() => AxiosPromise<Menu[]>) | undefined> => {
	try {
		const res = await fetchGNB;
		return res;
	} catch (error) {
		console.log(error);
	}
};

export default defineComponent({
	components: { GNBMenu },
	name: 'GNB',
	setup() {
		const store: Store<any> = useStore();

		const state = reactive({
			gnbList: [] as Array<Menu>,
		});

		store.commit('SET_GNB');
		return {
			...toRefs(state),
		};
	},
});
</script>

<style scoped>
.gnb {
	width: 100%;
	position: fixed;
	top: 0;
	padding: 2px 0 0;
	height: 46px;
	background-color: rgba(0, 0, 0, 0.6);
	line-height: 46px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	z-index: 99;
}
.gnb .slide {
	overflow-x: auto;
	width: 100%;
	padding: 0 2%;
	box-sizing: border-box;
	-webkit-overflow-scrolling: touch;
}
.gnb .slide::-webkit-scrollbar {
	display: none;
	padding-right: 2%; /* Chrome, Safari, Opera*/
}
.gnb .slide ul {
	overflow: hidden;
	margin: 0 auto;
	display: flex;
	justify-content: center;
}
.gnb .slide ul li {
	margin-left: 12px;
	font-size: 15px;
	color: #fff;
	letter-spacing: -0.75px;
	position: relative;
	font-family: 'notokr-regular';
}
.gnb .slide ul li:first-child {
	margin: 0;
}
.gnb .slide ul li a {
	box-sizing: border-box;
	display: block;
	padding: 0 1px;
}
.gnb .slide ul li.on {
	height: 45px;
	font-family: 'notokr-bold';
}
.gnb .slide ul li.on:after {
	position: absolute;
	left: 0;
	bottom: -1px;
	content: '';
	width: 100%;
	height: 3px;
	background: #fff;
	border-radius: 3px;
	z-index: 10;
}
</style>
