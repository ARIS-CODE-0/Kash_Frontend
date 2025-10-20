<template>
    <!--Background-->
    <div v-if="isFixed" 
    class="backgound fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-1000 z-40"
    :class="isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none' "
    @click="togglePanel">

    </div>
    <!--Panneau-->
    <div 
     class="card w-85 shadow-2xl flex flex-col p-6 gap-4 text-xl bg-base-100 transition-all overflow-hidden z-50"
     :class="[
        isFixed ? 'fixed bottom-0' : 'relative',
        isOpen ? 'translate-y-0 h-[75vh]  ease-out duration-1000' : 'translate-y-[0] h-[10%] ease-in duration-1000'
        ]"
        >
        <div class="flex justify-between">
            <h2 class="font-bold">Dépenses Récentes</h2>
            <a href="#" class="text-primary" @click="togglePanel">{{ isOpen ? 'Voir moins' : 'Voir plus' }}</a>
        </div>
        <div v-if="allExpenses.length > 0" class="overflow-y-auto">
            <table class="w-full">
                <transition-group name="fade" tag="tbody" class="flex flex-col gap-3 w-full">
                    <TableLigne v-for="(expense, i) in allExpenses"
                        :expense="expense"
                        :index="i"
                        :key="expense._id"
                    />
                </transition-group>
            </table>
        </div>
        <div v-else>
            <p class="text-xl text-gray-500 italic text-center">Vous n'avez aucune dépense</p>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import TableLigne from './table-ligne.vue';

const isOpen = ref(false);
const isFixed = ref(false);

const props = defineProps({
    expenses: {
        type: Array,
        required: true
    }
})


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



//const expenses = ref(props.expenses)

/*const allExpenses = ref(expenses.value.slice(0,4))

watch(isOpen, () => {
    if(!isOpen.value) {
        setTimeout(() => {
            allExpenses.value = expenses.value.slice(0,4)
            return
        }, 1000)
    }

    allExpenses.value = expenses.value
})*/

const allExpenses = computed(() => {
    return isOpen.value ? props.expenses : props.expenses.slice(0, 4)
})

</script>
<style>
.fade-enter-active, .fade-leave-active { transition: all 0.4s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-10px); }
</style>