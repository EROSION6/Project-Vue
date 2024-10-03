<template>
	<div class="photos" v-if="!$store.state.isLoading">
		<PhotoForm />
		<div class="container">
			<Photo
				v-for="photo in $store.getters.getPhotos"
				:key="photo.id"
				:photo="photo"
			/>
		</div>
		<PhotoDialog />
	</div>
	<div v-else>Loading...</div>
</template>

<script>
import Photo from '@/components/Photo.vue'
import PhotoDialog from '@/components/PhotoDialog.vue'
import PhotoForm from '@/components/PhotoForm.vue'

export default {
	components: { Photo, PhotoForm, PhotoDialog },
	mounted() {
		this.$store.dispatch('fetchPhotos')
	},
}
</script>

<style scoped>
.photos {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.container {
	width: 100%;
	display: grid;
	flex-direction: column;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	justify-content: center;
	align-items: center;
	gap: 30px;
}

.loading {
	text-align: center;
	margin-top: 50px;
	font-size: 24px;
}
</style>
