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
  },
  colors: {
    type: Array,
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
  labels: props.data.labels,
  datasets: [{
    label: props.data.label,
    data: props.data.data,
    backgroundColor: props.colors,
    hoverOffset: 4
  }]
})

</script>
