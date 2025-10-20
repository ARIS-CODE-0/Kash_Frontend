<template>
  <Doughnut :data="chartData" :options="options" />
</template>

<script setup>
//import des dépendances
import { onMounted, ref, computed } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "vue-chartjs";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
});

//enregistrement des dépendances
ChartJS.register(ArcElement, Tooltip, Legend, Title);

//creation des options (reactive)
const options = computed(() => ({
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: props.data?.label,
      font: {
        size: 25,
      },
    },
  },
}));

//création des données (reactive)
const chartData = computed(() => ({
  labels: props.data?.labels || [],
  datasets: [
    {
      label: props.data?.label,
      data: props.data?.data || [],
      backgroundColor: props.colors || [],
      hoverOffset: 4,
    },
  ],
}));
</script>
