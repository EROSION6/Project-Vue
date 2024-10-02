<template>
	<div class="photos" v-if="!isLoading">
		<PhotoForm @addPhoto="addPhoto" :openDialog="openDialog" />
		<div class="container">
			<Photo
				v-for="photo in photos"
				:key="photo.id"
				:photo="photo"
				@openDialog="openDialog($event)"
			/>
		</div>
		<PhotoDialog
			:photo="selectedPhoto"
			:isVisibleDialog="isVisibleDialog"
			@closeDialog="closeDialog"
		/>
	</div>
	<div class="loading" v-else>Loading...</div>
</template>

<script>
import Photo from '@/components/Photo.vue'
import PhotoDialog from '@/components/PhotoDialog.vue'
import PhotoForm from '@/components/PhotoForm.vue'

export default {
	components: { Photo, PhotoForm, PhotoDialog },
	data() {
		return {
			photos: [],
			isLoading: true,
			isVisibleDialog: false,
			selectedPhoto: {},
		}
	},
	mounted() {
		this.fetchPhotos()
	},
	methods: {
		async fetchPhotos() {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos?_limit=10'
			)
			this.isLoading = false
			const data = await response.json()
			this.photos = data
		},

		addPhoto(photo) {
			this.photos.push(photo)
		},

		openDialog(photo) {
			this.isVisibleDialog = true
			this.selectedPhoto = photo
		},
		closeDialog() {
			this.isVisibleDialog = false
		},
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
