<template>
	<div class="card">
		<img
			:src="photo.url"
			alt="Photo"
			@click="
				$store.commit('showDialogWindow'), $store.commit('selectPhoto', photo)
			"
		/>
		<div class="description">
			<h2>{{ photo.title }}</h2>
			<button
				class="btn-delete"
				@click="$store.commit('removePhoto', photo.id)"
			>
				Delete
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Photo',
	props: {
		photo: { type: Object, required: true },
	},
}
</script>

<style scoped>
.card {
	width: 450px;
	height: auto;
	border: 1px solid #c8c8c8;
}

.card img {
	width: 100%;
	height: 350px;
}

.description {
	padding: 5px;
}

.btn-delete {
	margin-top: 10px;
	background: none;
	border: 1px solid red;
	color: red;
	cursor: pointer;
	font-size: 16px;
	outline: none;
	border-radius: 8px;
	padding: 5px 9px;
}
</style>
