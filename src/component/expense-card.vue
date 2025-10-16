<template>
    <div class="card w-90 shadow-2xl flex flex-col p-6 gap-4 text-xl">
        <div class="flex justify-between">
            <h2 class="font-bold">Dépenses Récentes</h2>
            <a href="#">Voir tout</a>
        </div>
        <table>
            <tbody>
                <TableLigne v-for="(expense, i) in expenses"
                :exepense="expense"
                :index="i"
                :key="expense.title"
                />
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TableLigne from './table-ligne.vue';

const expenses = ref([{
    title: "Restaurant",
    date: "10 Oct, 13:45",
    amount: 45.50,
    category: {
        name: "eat",
        icon: "utensils",
        color: "error"
    }
},
{
    title: "Shopping",
    date: "9 Oct, 18:20",
    amount: 120,
    category: {
        name: "shopping",
        icon: "shopping-cart",
        color: "primary"
    }
},
{
    title: "Carburant",
    date: "9 Oct, 08:12",
    amount: 62.30,
    category: {
        name: "fuel",
        icon: "fuel",
        color: "success"
    }
},
{
    title: "Factures",
    date: "8 Oct, 11:00",
    amount:85.00,
    category: {
        name: "bills",
        icon: "scroll-text",
        color: "warning"
    }
}]
)

</script>