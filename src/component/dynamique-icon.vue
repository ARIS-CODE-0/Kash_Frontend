<script setup>
import { defineAsyncComponent, computed } from 'vue'

// ⚙️ Props : nom de l'icône et options d'apparence
const props = defineProps({
  name: { type: String, required: true },
  fallback: { type: String, default: 'circle-alert' }, // icône par défaut
})

// 🧩 Cache local pour éviter de recharger les icônes déjà importées
const iconCache = new Map()

// ⚡ Fonction d'import avec fallback automatique
async function loadIcon(name) {
  if (iconCache.has(name)) return iconCache.get(name)

  try {
    const module = await import(`../../node_modules/lucide-vue-next/dist/esm/icons/${name}.js`)
    iconCache.set(name, module.default)
    return module.default
  } catch (err) {
    console.warn(`[DynamicIcon] Icône "${name}" introuvable, fallback sur "${props.fallback}"`)
    const fallbackModule = await import(`../../node_modules/lucide-vue-next/dist/esm/icons/${props.fallback}.js`)
    iconCache.set(name, fallbackModule.default)
    return fallbackModule.default
  }
}

// 🧠 Composant asynchrone réactif
const Icon = computed(() =>
  defineAsyncComponent(() => loadIcon(props.name))
)
</script>

<template>
  <component :is="Icon" v-bind="$attrs" />
</template>
