import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
	state: {
		photos: [],
		isLoading: false,
		isVisibleDialog: false,
		selectedPhoto: {},
	},
	getters: {
		getPhotos: state => state.photos,
		getIsVisibleDialog: state => state.isVisibleDialog,
		getSelectedPhoto: state => state.selectedPhoto,
	},
	actions: {
		async fetchPhotos({ commit }) {
			try {
				this.state.isLoading = true
				const data = await axios.get(
					'https://jsonplaceholder.typicode.com/photos?_limit=10'
				)
				this.state.isLoading = false
				commit('SET_PHOTOS', data.data)
			} catch (error) {
				console.log(error)
			}
		},
	},
	mutations: {
		SET_PHOTOS(state, photos) {
			state.photos = photos
		},
		showDialogWindow: state => {
			state.isVisibleDialog = true
		},
		hideDialogWindow: state => {
			state.isVisibleDialog = false
		},
		selectPhoto: (state, photo) => {
			state.selectedPhoto = photo
		},
		addPhoto: (state, photo) => {
			state.photos.push(photo)
		},
		removePhoto: (state, id) => {
			state.photos = state.photos.filter(p => p.id !== id)
		},
	},
})
