<template>
    <!--Background-->
    <div v-if="isFixed" 
    class="backgound fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-1000 z-40"
    :class="isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none' "
    @click="togglePanel">

    </div>
    <!--Panneau-->
    <div 
     class="card w-90 shadow-2xl flex flex-col p-6 gap-4 text-xl bg-base-100 transition-all overflow-hidden z-50"
     :class="[
        isFixed ? 'fixed bottom-0' : 'relative',
        isOpen ? 'translate-y-0 h-[75vh]  ease-out duration-1000' : 'translate-y-[0] h-[10%] ease-in duration-1000'
        ]"
        >
        <div class="flex justify-between">
            <h2 class="font-bold">Dépenses Récentes</h2>
            <a href="#" class="text-primary" @click="togglePanel">{{ isOpen ? 'Voir moins' : 'Voir plus' }}</a>
        </div>
        <div class="overflow-y-auto">
            <table>
            <tbody>
                <TableLigne v-for="(expense, i) in allExpenses"
                :exepense="expense"
                :index="i"
                :key="expense.title"
                />
            </tbody>
        </table>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import TableLigne from './table-ligne.vue';

const isOpen = ref(false);
const isFixed = ref(false);


function togglePanel() {
    if(!isOpen.value) {
        //---OUVERTURE---//
        isFixed.value = true
        requestAnimationFrame(() => {
            isOpen.value = true
        })
    } else {
        //---FERMETURE---//
        isOpen.value = false
        setTimeout(() => {
            isFixed.value = false
        },1000)
    }
}


const div = ref(null)
onMounted(() => {
    div.value = document.getElementById("div");
})


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
    amount: 120.00,
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
},
{
    title: "Snkrs",
    date: "8 Oct, 12:00",
    amount:85.00,
    category: {
        name: "bills",
        icon: "scroll-text",
        color: "warning"
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
},{
    title: "Factures",
    date: "8 Oct, 11:00",
    amount:85.00,
    category: {
        name: "bills",
        icon: "scroll-text",
        color: "warning"
    }
}
]
);

const allExpenses = ref(expenses.value.slice(0,4))

watch(isOpen, () => {
    if(!isOpen.value) {
        setTimeout(() => {
            allExpenses.value = expenses.value.slice(0,4)
            console.log(4)
            return
        }, 1000)
    }

    allExpenses.value = expenses.value
    console.log("toutes les...")
})

</script>