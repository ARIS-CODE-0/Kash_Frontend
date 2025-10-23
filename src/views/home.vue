<template>
  <header class="flex items-center justify-between p-3">
    <h1 class="text-4xl font-bold">Kash</h1>
    <Moon class="stroke-gray-500 fill-gray-500" @click="toggleTheme"/>
  </header>
  <main class="flex flex-col items-center pt-5 gap-8" v-if="state === 'success'">
    <TotalCard :totalAmount="statistiques.totalAmount"/>
    <CategoryCard :chart-data="statistiques.chartData"/>
    <ExpenseModal 
    @create="createExpense"
    @update="updateExpense"
    :is-an-update="isAnUpdate" 
    :update-data="updateData"/>

    <ExpenseCard 
    :expenses="data" 
    @delete="deleteExpense" 
    @update="openUpadteModal"/>
  </main>
  <Erreur v-else-if="state === 'error'" :message="erreur.message"/>
  <Loading v-else/>
  
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Moon } from 'lucide-vue-next';
import TotalCard from '../component/total-card.vue';
import CategoryCard from '../component/category-card.vue';
import ExpenseCard from '../component/expense-card.vue';
import Erreur from '@/component/erreur.vue';
import Loading from '@/component/loading.vue';
import ExpenseModal from '@/component/expense-modal.vue';

const data = ref([]);
const state = ref('loading');
const erreur = ref({ status: false, message: "No error !"})
const statistiques = ref(null);
const isAnUpdate = ref(false)
const updateData = ref(null)

onMounted(async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expenses`)
    data.value = await response.json();
    const statRes = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expenses/statistiques`)
    statistiques.value = await statRes.json()
    state.value = 'success'
  } catch (error) {
    state.value = 'error'
    erreur.value.status = true;
    erreur.value.message = 'Une erreur lors de la récuperation des données du serveur. Veuillez reesayer plus tard !'
    console.error(error)
  }
})

const toggleTheme = () => {
  /*const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'Kash_ligth_theme' ? 'light' : 'Kash_ligth_theme')*/
  alert('la fonctionnalité est en cours de dévéloppement')
  }

async function createExpense(newExpense) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expense`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    })

    if(!res.ok) {
      throw new Error('une erreur est survenue lors de la création de la dépense')
      return
    }
    const returnedExpense = await res.json() 
    data.value.unshift(await returnedExpense.expense)
    const statRes = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expenses/statistiques`)
    statistiques.value = await statRes.json()

  } catch (error) {
    console.error(error)
  }
}

async function deleteExpense(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expense/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    if(!res.ok) {
      throw new Error('une erreur est survenue lors de la suppression de la dépense')
      return
    }

    const index = data.value.findIndex(exp => exp._id === id)
    data.value.splice(index,1)
    const statRes = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expenses/statistiques`)
    statistiques.value = await statRes.json()
  } catch (error) {
    console.error(error);
  }

}

async function updateExpense(expense) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expense/${expense.id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense)
    })
    if(!res.ok) {
      throw new Error('une erreur est survenue lors de la modification de la dépense')
      return
    }


    const newExpenses = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expenses`);
    const index = data.value.findIndex(exp => exp._id === expense.id)
    data.value = await newExpenses.json()
    const statRes = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/expenses/statistiques`)
    statistiques.value = await statRes.json()

    isAnUpdate.value = false

    //alert('la fonctionnalité est en developpement')
  } catch (error) {
    console.error(error)
  }
}
 

 async function openUpadteModal(expense) {
    updateData.value = expense
    isAnUpdate.value  = true
 }
</script>