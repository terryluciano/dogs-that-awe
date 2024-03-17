<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
	<nav
		class="bg-primary-purple p-4 flex justify-start relative text-custom-white w-full"
	>
		<RouterLink class="text-xl font-Madimi-One" to="/"
			>Dogs That Awe</RouterLink
		>
		<div
			class="font-[Inter] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium flex flex-row justify-center items-center gap-2"
		>
			<RouterLink
				class="text-lg hover:text-secondary-green"
				:class="{ 'text-secondary-green': $route.path === '/good' }"
				to="/good"
				>Good Boys</RouterLink
			>
			<div class="bg-custom-white w-[2px] h-6" />
			<RouterLink
				class="text-lg hover:text-secondary-pink"
				:class="{ 'text-secondary-pink': $route.path === '/bad' }"
				to="/bad"
				>Bad Boys</RouterLink
			>
		</div>
	</nav>
	<div class="p-4 w-full h-auto">
		<RouterView />
	</div>
</template>

<style scoped></style>
