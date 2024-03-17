<script setup>
import { RouterLink } from 'vue-router';
import NewFoundlandPuppy from '../assets/nfPup.webp';
</script>

<template>
	<div class="flex flex-col center w-full max-w-[1020px] gap-4">
		<h1 class="font-Madimi-One text-4xl">Dogs That Awe</h1>
		<img :src="NewFoundlandPuppy" class="h-[400px] rounded-lg" />
		<p class="">
			Welcome to Dogs That Awe! Explore a curated collection of XL dog
			breeds that have caught my attention. Click on the links below to
			discover the breeds I admire and those that don't quite match my
			preferences. Please note that while I may have personal preferences,
			every dog deserves love and respect regardless of breed.
		</p>
		<div class="flex flex-row flex-wrap gap-4">
			<RouterLink to="/good" class="text-xl font-semibold"
				><div
					class="bg-secondary-green w-48 h-24 rounded-md flex center hover:text-custom-white transition-all"
				>
					Good Boy
				</div></RouterLink
			>
			<RouterLink to="/bad" class="text-xl font-semibold"
				><div
					class="bg-secondary-pink w-48 h-24 rounded-md flex center hover:text-custom-white transition-all"
				>
					Bad Boys
				</div></RouterLink
			>
		</div>
		<h2 class="text-xl font-semibold">Why Do I Love XL Dog Breeds?</h2>
		<p>
			I prefer XL dog breeds because they resemble big bears, making them
			fun and comforting to cuddle with. They also make the coolest and
			most loyal best friends, adding joy and companionship to my life.
			Additionally, many of the largest dog breeds are known for their
			friendly and gentle nature, further enhancing their appeal as
			companions.
		</p>
		<form>
			<label for="favoriteDog">1. Favorite Dog Breed:</label>
			<input
				type="text"
				id="favoriteDog"
				name="favoriteDog"
				required
			/><br /><br />

			<label for="leastFavoriteDog">2. Least Favorite Dog Breed:</label>
			<input
				type="text"
				id="leastFavoriteDog"
				name="leastFavoriteDog"
				required
			/><br /><br />

			<label for="dogPersonality"
				>3. Are you a dog person, a cat person, or both?</label
			><br />
			<input
				type="radio"
				id="dogPerson"
				name="petPreference"
				value="dog"
				required
			/>
			<label for="dogPerson">Dog person</label><br />

			<input
				type="radio"
				id="catPerson"
				name="petPreference"
				value="cat"
				required
			/>
			<label for="catPerson">Cat person</label><br />

			<input
				type="radio"
				id="bothPerson"
				name="petPreference"
				value="both"
				required
			/>
			<label for="bothPerson">Both</label><br /><br />
			<label for="subscribe"
				>4. Would you like to subscribe to our newsletter?</label
			>
			<input
				type="checkbox"
				id="subscribe"
				name="subscribe"
				value="yes"
			/><br /><br />

			<input type="submit" value="Submit" />
		</form>
	</div>
</template>

<style scoped></style>
