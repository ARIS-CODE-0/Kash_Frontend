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

const badgeClass = ref('badge badge-soft p-5')

switch (props.type) {
    case 'primary':
        badgeClass.value = 'badge badge-soft p-5 badge-primary'
        break;
    case 'secondary':
        badgeClass.value = 'badge badge-soft p-5 badge-secondary'
        break;
    case 'accent':
        badgeClass.value = 'badge badge-soft p-5 badge-accent'
        break;
    case 'neutral':
        badgeClass.value = 'badge badge-soft p-5 badge-neutral'
        break;
    case 'info':
        badgeClass.value = 'badge badge-soft p-5 badge-info'
        break;
    case 'success':
        badgeClass.value = 'badge badge-soft p-5 badge-success'
        break;
    case 'warning':
        badgeClass.value = 'badge badge-soft p-5 badge-warning'
        break;
    case 'error':
        badgeClass.value = 'badge badge-soft p-5 badge-error'
        break;
    default: 
        badgeClass.value = 'badge badge-soft p-5'
        break;
}

</script>