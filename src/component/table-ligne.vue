<template>
    <tr>
        <td>
            <Badge :type="exepense.category.color">
                <DynamiqueIcon :name="exepense.category.icon" size="30"/>
            </Badge>
        </td>
        <td>
            <h4 class="font-bold">
                {{ exepense.title }}
            </h4>
            <p>{{ exepense.date }}</p>
        </td>
        <td>
            <span class="text-error font-bold relative left-5">- {{ exepense.amount }} $</span>
        </td>
    </tr>
</template>

<script setup>
import { onMounted } from 'vue';
import DynamiqueIcon from './dynamique-icon.vue';
import Badge from './badge.vue';

const props = defineProps({
    exepense: {
        type: Object,
        required: true
    }
})

</script>
<style scoped>
;

</style>