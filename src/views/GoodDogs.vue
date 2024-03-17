<script setup>
import ComparisonTable from '../components/ComparisonTable.vue';
import newfieIMG from '../assets/newfie.webp';
import saintBIMG from '../assets/stBern.webp';
import berneseIMG from '../assets/bernese.jpg';

const newfie = {
	name: 'Newfoundland',
	img: newfieIMG,
	pros: [
		'Gentle giants, great with kids and pets.',
		'Superb swimmers, ideal for water activities.',
		'Naturally protective, excellent watchdogs.',
		'Minimal grooming needs for a long-haired breed.',
	],
	cons: [
		'Challenging to handle due to large size.',
		'Heavy shedding, requires regular grooming.',
		'Notorious drooling may be a drawback.',
		'Prone to health issues, requires regular vet check-ups.',
	],
};

const saintB = {
	name: 'Saint Bernard',
	img: saintBIMG,
	pros: [
		'Friendly and sociable, good with kids and other pets.',
		'Loyal and protective, makes a great watchdog.',
		'Adaptable to various living environments.',
		'Distinctive appearance, often attracts attention.',
	],
	cons: [
		'Require space and exercise due to large size.',
		'Heavy shedding, regular grooming needed.',
		'Prone to health issues like hip and elbow dysplasia.',
		'Drooling can be excessive for some owners.',
	],
};

const bernese = {
	name: 'Bernese Mountain Dog',
	img: berneseIMG,
	pros: [
		'Gentle giants, great with children and other pets.',
		'Affectionate and loyal companions, bond closely with family.',
		'Versatile working dogs, excel in activities like cart pulling.',
		'Beautiful tri-color coat, striking appearance.',
	],
	cons: [
		'Require regular exercise and mental stimulation due to energy levels.',
		'Heavy shedding, especially during shedding seasons.',
		'Prone to certain health issues like hip and elbow dysplasia.',
		'Shorter lifespan compared to smaller dog breeds.',
	],
};
</script>

<template>
	<div class="flex flex-col w-full justify-start items-center gap-4">
		<p class="text-lg">Good Boys</p>
		<div
			class="bg-no-repeat rounded-xl mt-8"
			:style="{
				backgroundImage: `url(${newfie?.img})`,
				backgroundSize: 'cover',
				backgroundPosition: 'top',
				width: '533px',
				height: '300px',
			}"
		/>
		<ComparisonTable
			:pros="newfie.pros"
			:cons="newfie.cons"
			:name="newfie.name"
		/>
		<div
			class="bg-no-repeat rounded-xl mt-8"
			:style="{
				backgroundImage: `url(${saintB?.img})`,
				backgroundSize: 'cover',
				backgroundPosition: 'top',
				width: '533px',
				height: '300px',
			}"
		/>
		<ComparisonTable
			:pros="saintB.pros"
			:cons="saintB.cons"
			:name="saintB.name"
		/>
		<div
			class="bg-no-repeat rounded-xl mt-8"
			:style="{
				backgroundImage: `url(${bernese?.img})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: '533px',
				height: '300px',
			}"
		/>
		<ComparisonTable
			:pros="bernese.pros"
			:cons="bernese.cons"
			:name="bernese.name"
		/>
	</div>
</template>

<style scoped></style>
