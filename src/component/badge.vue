<template>
    <div :class="badgeClass" >
        <slot/>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    type: {
        type: String,
        required: true
    }
})

const badgeClass = computed(() => [
    'badge badge-soft p-5',
    `badge-${props.type}`
])

console.log(props.type)

</script>