<template>
    <tr class="flex gap-[10%] w-full">
        <td class=" w-[20%]">
            <Badge :type="expense.category.color">
                <DynamiqueIcon :name="expense.category.icone" size="30"/>
            </Badge>
        </td>
        <td class=" w-[50%]">
            <h4 class="font-bold">
                {{ expense.title }}
            </h4>
            <p>{{ expense.date }}</p>
        </td>
        <td class=" w-[30%] text-right">
            <span class="text-error font-bold relative">- {{ expense.amount }} $</span>
        </td>
    </tr>
</template>

<script setup>
import { onMounted } from 'vue';
import DynamiqueIcon from './dynamique-icon.vue';
import Badge from './badge.vue';

const props = defineProps({
    expense: {
        type: Object,
        required: true
    }
})

</script>
<style scoped>
;

</style>