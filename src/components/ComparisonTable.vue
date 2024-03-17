<script setup>
import ProIcon from './ProIcon.vue';
import ConIcon from './ConIcon.vue';
import DogImage from './DogImage.vue';
import { defineProps, computed } from 'vue';

const props = defineProps({
	pros: { type: Array, required: true },
	cons: { type: Array, required: true },
	name: { type: String, required: true },
});

const maxRows = computed(() =>
	props.pros.length > props.cons.length ? props.pros : props.cons
);
</script>

<template>
	<h2 class="text-2xl font-bold">{{ props.name }}</h2>
	<table class="table w-full max-w-[500px] bg-gray-50/50">
		<thead>
			<tr>
				<th>
					<div class="flex center gap-2">
						Pros <ProIcon :width="18" />
					</div>
				</th>
				<th>
					<div class="flex center gap-2">
						Cons <ConIcon :width="18" />
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(_, i) in maxRows" :key="i">
				<td class="p-2">
					<span v-show="props.pros[i] != undefined">-</span>
					{{ props.pros[i] }}
				</td>
				<td class="p-2">
					<span v-show="props.cons[i] != undefined">-</span>
					{{ props.cons[i] }}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
th {
	border-bottom: 1px solid var(--primary-purple);
}
</style>
