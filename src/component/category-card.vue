<template>
    <div class="card w-90 p-6 bg-base-100 shadow-xl">
        <DognhutChart :data="chartData" :colors="colors"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DognhutChart from './dognhut-chart.vue';
import { getHexaCode } from '@/component/composables/utils'

/*const chartData =  ref({
    label: "Catégories",
    labels: ["Réstaurant", "Shopping", "Carburant","Facture"],
    data: [45.5, 120, 62.3, 85],
    colors: ["error","primary","success", "warning"]
})*/
const colors = ref([])

const props = defineProps({
    chartData: {
        type: Object,
        required: true
    }
})

props.chartData.colors.forEach((color,index) => {
    colors.value[index] = getHexaCode(color)
})



</script>