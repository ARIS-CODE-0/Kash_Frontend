<template>
  <header class="flex items-center justify-between p-3">
    <h1 class="text-4xl font-bold">Kash</h1>
    <Moon class="stroke-gray-500 fill-gray-500" @click=""/>
  </header>
  <main class="flex flex-col items-center pt-5 gap-8">
    <TotalCard/>
    <CategoryCard/>
    <button class="btn btn-primary text-white w-90 h-30 flex flex-col text-2xl font-bold shadow-xl">
      <CirclePlus size="45"/>
      Ajouter une dépense
    </button>
    <ExpenseCard/>
  </main>
</template>

<script setup>
import { Moon, CirclePlus } from 'lucide-vue-next';
import TotalCard from '../component/total-card.vue';
import CategoryCard from '../component/category-card.vue';
import ExpenseCard from '../component/expense-card.vue';

const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'Kash_ligth_theme' ? 'light' : 'Kash_ligth_theme')
}
 
</script>