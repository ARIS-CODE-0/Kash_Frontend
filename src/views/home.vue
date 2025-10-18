<template>
  <header class="flex items-center justify-between p-3">
    <h1 class="text-4xl font-bold">Kash</h1>
    <Moon class="stroke-gray-500 fill-gray-500" @click=""/>
  </header>
  <main class="flex flex-col items-center pt-5 gap-8" v-if="state === 'success'">
    <TotalCard :totalAmount="statistiques.totalAmount"/>
    <CategoryCard :chart-data="statistiques.chartData"/>
    <button class="btn btn-primary text-white w-90 h-30 flex flex-col text-2xl font-bold shadow-xl">
      <CirclePlus size="45"/>
      Ajouter une dépense
    </button>
    <ExpenseCard :expenses="data"/>
  </main>
  <Erreur v-else-if="state === 'error'" :message="erreur.message"/>
  <Loading v-else/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Moon, CirclePlus } from 'lucide-vue-next';
import TotalCard from '../component/total-card.vue';
import CategoryCard from '../component/category-card.vue';
import ExpenseCard from '../component/expense-card.vue';
import Erreur from '@/component/erreur.vue';
import Loading from '@/component/loading.vue';

const data = ref(null);
const state = ref('loading');
const erreur = ref({ status: false, message: "No error !"})
const statistiques = ref(null);

onMounted(async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expenses`)
    data.value = await response.json();
    const statRes = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expenses/statistiques`)
    statistiques.value = await statRes.json()
    console.log(statistiques.value)
    state.value = 'success'
  } catch (error) {
    state.value = 'error'
    erreur.value.status = true;
    erreur.value.message = 'Une erreur lors de la récuperation des données du serveur. Veuillez reesayer plus tard !'
    console.error(error)
  }
})

const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'Kash_ligth_theme' ? 'light' : 'Kash_ligth_theme')
}
 
</script>