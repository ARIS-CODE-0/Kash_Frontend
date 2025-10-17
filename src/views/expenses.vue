<template>
    <header class="flex items-center justify-between p-3">
        <h1 class="text-4xl font-bold">Kash</h1>
        <Moon class="stroke-gray-500 fill-gray-500" @click=""/>
    </header>
    <main class="flex flex-col items-center pt-5 gap-8">
        <ExpensesTotalCard/>
    </main>
</template>

<script setup>
    import ExpensesTotalCard from '@/component/expenses-total-card.vue';
import { Moon } from 'lucide-vue-next';
</script>