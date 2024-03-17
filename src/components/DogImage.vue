<script setup>
import { defineProps } from 'vue';

const props = defineProps(['img']);
</script>

<template>
	<div
		:style="{
			backgroundImage: `url(${props?.img})`,
			backgroundSize: 'contain',
			backgroundPosition: 'center',
			width: '533px',
			height: '300px',
		}"
	></div>
</template>
