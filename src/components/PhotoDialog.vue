<template>
	<div class="dialog" v-if="$store.state.isVisibleDialog">
		<div class="dialog__content">
			<h2>{{ $store.getters.getSelectedPhoto.title }}</h2>
			<img :src="$store.getters.getSelectedPhoto.url" alt="Photo dialog" />
			<div class="dialog__actions">
				<button @click="$store.commit('hideDialogWindow')">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PhotoDialog',
}
</script>

<style scoped>
.dialog {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
}

.dialog__content {
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	max-width: 800px;
}

.dialog__content > img {
	width: 100%;
	height: 400px;
}
</style>
