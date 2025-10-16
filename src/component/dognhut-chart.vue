<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup>
//import des dépendances
import { onMounted, ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

//enregistrement des dépendances
ChartJS.register(ArcElement, Tooltip, Legend, Title)

//creation des options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: props.data.label,
      font: {
        size: 25
      }
    }
  }
}

//création des données
const data = ref({
  labels: /*[
    'Red',
    'Blue',
    'Yellow'
  ]*/props.data.labels,
  datasets: [{
    label: props.data.label,
    data: props.data.data,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(54, 255, 86)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
})

console.log(props.data)
</script>
