router-linkrouter-link
<template>
	<header class="headers">
		<nav>
			<router-link to="/"> Главная </router-link>
			<router-link to="/photo">Фото </router-link>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Navbar',
}
</script>

<style scoped>
.headers {
	background-color: #333;
	color: #fff;
	padding: 10px;
	text-align: center;
	display: flex;
	justify-content: center;

	nav {
		display: flex;
		gap: 10px;

		a {
			text-decoration: none;
			color: white;
			font-weight: 500;
			transition: color 0.3s ease;

			&:hover {
				color: #c9c9c9;
			}
		}
	}
}
</style>
