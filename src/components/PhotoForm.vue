<template>
	<div class="forms">
		<form @submit.prevent>
			<div class="inputs">
				<input type="text" placeholder="Write title" v-model="title" />
				<input type="file" @change="onFileChange" />
			</div>
			<button @click="addPhoto">Добавить</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'PhotoForm',
	data() {
		return {
			title: '',
			url: '',
		}
	},
	methods: {
		onFileChange(event) {
			const file = event.target.files[0]
			this.url = file
		},
		addPhoto() {
			if (this.title === '' && this.url === null) {
				alert('Заголовок и изображение обязательны к заполнению.')
				return
			} else {
				const reader = new FileReader()

				reader.onload = () => {
					const photo = {
						id: Date.now(),
						title: this.title,
						url: reader.result,
					}
					this.$store.commit('addPhoto', photo)
				}
				reader.readAsDataURL(this.url)
				this.title = ''
				this.url = ''
			}
		},
	},
}
</script>

<style scoped>
.forms {
	width: 100%;
	margin: 20px 0;
}
.forms > form {
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
}

.inputs {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-bottom: 10px;
	width: 100%;
}

.forms > form > .inputs > input[type='text'] {
	width: 50%;
	padding: 8px 10px;
	border: 1px solid #c9c9c9;
	outline: none;
}

.forms > form > .inputs > input[type='file'] {
	width: 50%;
	margin-top: 10px;
	padding: 8px 10px;
	border: 1px solid #c9c9c9;
	outline: none;
	cursor: pointer;
}

.forms > form > button {
	padding: 8px 10px;
	background-color: #333;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	margin-top: 10px;
	width: 50%;
	border-radius: 8px;
	font-size: 18px;
}
</style>
