<template>
    <div :class="badgeClass" >
        <slot/>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps({
    type: {
        type: String,
        required: true
    }
})

/*const badgeClass = computed(() => [
    'badge badge-soft p-5',
    `badge-${props.type}`
])*/

const badgeClass = ref('badge badge-soft p-5')

switch (props.type) {
    case 'error':
        badgeClass.value = 'badge badge-soft p-5 badge-error'
        break;
    case 'primary':
        badgeClass.value = 'badge badge-soft p-5 badge-primary'
        break;
    case 'warning':
        badgeClass.value = 'badge badge-soft p-5 badge-warning'
        break;
    case 'success':
        badgeClass.value = 'badge badge-soft p-5 badge-success'
        break;
    default: 
        badgeClass.value = 'badge badge-soft p-5 badge-info'
        break;
}

console.log(props.type)

</script>