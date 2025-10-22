<template>
  <tr class="flex gap-[10%] w-full" @click="openModal(actionModal)">
    <td class="w-[20%]">
      <Badge :type="expense.category.color">
        <DynamiqueIcon :name="expense.category.icone" size="30" />
      </Badge>
    </td>
    <td class="w-[50%]">
      <h4 class="font-bold">
        {{ expense.title }}
      </h4>
      <p>{{ expense.date }}</p>
    </td>
    <td class="w-[30%] text-right">
      <span class="text-error font-bold relative"
        >- {{ expense.amount }} $</span
      >
    </td>
  </tr>


  <!--Modal pour les action de la dépense-->
  <dialog ref="actionModal" id="my_modal_1" class="modal">
    <div class="background fixed inset-0" @click="closeModal(actionModal)"></div>
    <div class="modal-box w-85 flex flex-col gap-3">
        <table>
            <tbody>
                <tr class="flex gap-[10%] w-full">
                    <td class="w-[20%]">
                        <Badge :type="expense.category.color">
                            <DynamiqueIcon :name="expense.category.icone" size="30" />
                        </Badge>
                    </td>
                    <td class="w-[50%]">
                        <h4 class="font-bold">
                            {{ expense.title }}
                         </h4>
                        <p>{{ expense.date }}</p>
                    </td>
                    <td class="w-[30%] text-right">
                        <span class="text-error font-bold relative">- {{ expense.amount }} $</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="flex gap-4 justify-center">
            <button class="btn btn-neutral p-5 ml-3" @click="closeModal(actionModal); emits('update')">Mofdifier</button>
            <button class="btn btn-error" @click="closeModal(actionModal); openModal(confirmModal)">Supprimer</button>
        </div>
    </div>
  </dialog>

  <!--Modal pour la confirmation de la la suppression-->
    <dialog id="my_modal_2" class="modal" ref="confirmModal">
      <div class="background fixed inset-0" @click="closeModal(confirmModal)"></div>
        <div class="modal-box w-85 flex flex-col gap-7">
            <div class="text-center">
              <h3 class="font-bold">Etes-vous sûr de vouloir supprimer cette dépense</h3>
            </div>
            <div class="flex gap-4 justify-center">
              <button class="btn btn-neutral p-5 ml-3"@click="closeModal(confirmModal);">Annuler</button>
              <button class="btn btn-error" @click="closeModal(confirmModal); emits('delete')">Supprimer</button>
        </div>
        </div>
    </dialog>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DynamiqueIcon from "./dynamique-icon.vue";
import Badge from "./badge.vue";

const props = defineProps({
  expense: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(['update','delete']);

const actionModal = ref(null);
const confirmModal = ref(null);

function openModal(modal) {
  modal.showModal();
  //isOpen = true
}

function closeModal(modal) {
   modal.close();
  //isOpen = false
}
console.log(props.expense.category)
</script>

<style scoped>

</style>
