<template>
	<div class="card" @click="$emit('openDialog', photo)">
		<img :src="photo.url" alt="Photo" />
		<div class="description">
			<h2>{{ photo.id + photo.title }}</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Photo',
	props: {
		photo: { type: Object, required: true },
		openDialog: { type: Function, required: true },
	},
}
</script>

<style scoped>
.card {
	width: 450px;
	height: 400px;
	border: 1px solid #c8c8c8;
}

.card img {
	width: 100%;
	height: 100%;
}
</style>
