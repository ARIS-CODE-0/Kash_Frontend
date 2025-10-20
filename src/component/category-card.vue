<template>
  <div class="card w-85 p-6 bg-base-100 shadow-xl">
    <DognhutChart :data="chartData" :colors="colors" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import DognhutChart from "./dognhut-chart.vue";
import { getHexaCode } from "@/component/composables/utils";

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});

const colors = computed(() => {
  const cols = props.chartData?.colors || [];
  return cols.map((c) => getHexaCode(c));
});
</script>
