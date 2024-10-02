<template>
	<div class="dialog" v-if="isVisibleDialog">
		<div class="dialog__content">
			<h2>{{ photo.title }}</h2>
			<img :src="photo.url" alt="Photo dialog" />
			<div class="dialog__actions">
				<button @click="$emit('closeDialog')">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PhotoDialog',

	props: {
		photo: {
			type: Object,
			required: true,
		},
		isVisibleDialog: {
			type: Boolean,
			default: false,
		},
	},
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
