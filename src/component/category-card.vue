<template>
    <div class="card w-90 p-6 bg-base-100 shadow-xl">
        <DognhutChart :data="chartData"/>
    </div>
</template>

<script setup>
import DognhutChart from './dognhut-chart.vue';

const chartData =  {
    label: "Catégories",
    labels: ["Réstaurant", "Shopping", "Carburant","Facture"],
    data: [45.5, 120, 62.3, 85]
}

</script>