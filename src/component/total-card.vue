<template>
    <div class="card w-85 p-6 bg-base-100 shadow-xl">
        <h4 class="font-bold">Total des Dépenses</h4>
        <h1 class="text-5xl font-bold">{{ totalAmount }} $</h1>
        <p v-if="pourcentage" class="text-success">+5.2% vs le mois dernier</p>
    </div>
</template>

<script setup>
const props = defineProps({
    totalAmount: {
        type: Number,
        required: true
    },
    pourcentage: {
        type: Number,
        required: false
    }
})
</script>