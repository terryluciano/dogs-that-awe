<script setup>
import ComparisonTable from '../components/ComparisonTable.vue';
import tibetanIMG from '../assets/tibetan.jpeg';
import corsoImg from '../assets/corso.avif';
import malamuteIMG from '../assets/malamute.webp';

const tm = {
	name: 'Tibetan Mastiff',
	img: tibetanIMG,
	pros: [
		'Loyal and protective, makes excellent guard dogs.',
		'Independent and intelligent, can be trained well.',
		'Dignified and calm demeanor, not overly hyperactive.',
		'Beautiful, luxurious coat, impressive appearance.',
	],
	cons: [
		'Requires strong leadership and consistent training.',
		'Can be aloof with strangers, requires socialization.',
		'Heavy shedding, especially during seasonal changes.',
		'Prone to certain health issues like hip dysplasia.',
	],
};

const cc = {
	name: 'Cane Corso',
	img: corsoImg,
	pros: [
		'Loyal and protective, excellent guard dogs.',
		'Intelligent and trainable, responsive to commands.',
		'Versatile, suitable for various activities like obedience and agility.',
		'Low grooming needs, easy to maintain coat.',
	],
	cons: [
		'Require early socialization and consistent training.',
		'High exercise requirements, need regular physical activity.',
		'May be reserved or wary with strangers, needs proper socialization.',
		'Prone to certain health issues like hip dysplasia and bloat.',
	],
};

const am = {
	name: 'Alaskan Malamute',
	img: malamuteIMG,
	pros: [
		'Friendly and affectionate, good with families.',
		'Strong and energetic, excellent for outdoor activities.',
		'Highly intelligent and trainable, eager to learn.',
		'Beautiful and distinctive appearance, often admired.',
	],
	cons: [
		'High exercise requirements, need plenty of physical activity.',
		'Independent nature, may be stubborn or willful.',
		'Heavy shedding, especially during seasonal changes.',
		'May have a strong prey drive, requires supervision around small animals.',
	],
};
</script>

<template>
	<div class="flex flex-col w-full justify-start items-center gap-4">
		<p class="text-lg">Bad Boys</p>
		<p class="text-sm">Not bad, just not the best choice for most people</p>
		<div
			class="bg-no-repeat rounded-xl mt-8"
			:style="{
				backgroundImage: `url(${tm?.img})`,
				backgroundSize: 'cover',
				backgroundPosition: 'top',
				width: '533px',
				height: '300px',
			}"
		/>
		<ComparisonTable :pros="tm.pros" :cons="tm.cons" :name="tm.name" />
		<div
			class="bg-no-repeat rounded-xl mt-8"
			:style="{
				backgroundImage: `url(${cc?.img})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: '533px',
				height: '300px',
			}"
		/>
		<ComparisonTable :pros="cc.pros" :cons="cc.cons" :name="cc.name" />
		<div
			class="bg-no-repeat rounded-xl mt-8"
			:style="{
				backgroundImage: `url(${am?.img})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: '533px',
				height: '300px',
			}"
		/>
		<ComparisonTable :pros="am.pros" :cons="am.cons" :name="am.name" />
	</div>
</template>

<style scoped></style>
