<template>
  <div class="w-85">

    <!--Bouton d'ouverture-->
    <button
      class="btn btn-primary text-white w-85 h-30 flex flex-col text-2xl font-bold shadow-xl"
      @click="openModal()"
    >
      <CirclePlus size="45" />
      Ajouter une dépense
    </button>

    

    <!--Modal-->
    <dialog ref="myModal" id="my_modal_1" class="modal">
      <div
      class="backgound fixed inset-0 bg-transparent backdrop-blur-sm "
     @click="closeModal"></div>
      <div class="modal-box w-85 min-h-50">
        <legend class="fieldset-legend">Nouvelle dépense</legend>
        <div class="modal-action flex flex-col justify-center">
          <form
            class="flex flex-col justify-center gap-3"
            @submit.prevent="submitExpense"
          >

            <!--Titre de la dépense-->
            <label class="label">Titre</label>
            <input
              type="text"
              class="input outline-primary focus:border-primary"
              placeholder="Ex : Chaussures"
              v-model.trim="title"
              required
            />

            <!--Catégorie de la dépense-->
            <label class="label">catégorie</label>
            <select
              class="select outline-primary focus:border-primary"
              v-model="category"
              required>
              <option disabled selected value="">Choisir la catégorie</option>

              <option v-for="ctg in categories" :value="ctg._id" :key="ctg._id">
                {{ ctg.name }}
              </option>
            </select>

            <!--Montant de la dépense-->
            <label class="label">Prix</label>
            <input
              type="number"
              class="input outline-primary focus:border-primary"
              placeholder="50"
              v-model.number="amount"
              min="1"
              required
            />

            <button class="btn btn-soft btn-primary border border-primary">
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { CirclePlus } from "lucide-vue-next";

const myModal = ref(null);
const title = ref("");
const amount = ref(0);
const category = ref("");
const categories = ref(null);
const isOpen = ref(false)

const emits = defineEmits(['submit'])

onMounted(async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/categories`);
  categories.value = await res.json();
});

function openModal() {
  myModal.value?.showModal();
  isOpen = true
}

function closeModal() {
  myModal.value?.close();
  isOpen = false
}

function submitExpense() {
  
  emits('submit', {title: title.value, amount: amount.value, category: category.value})
  title.value = ''
  amount.value = 0
  category.value = ''
  closeModal();
}
</script>
