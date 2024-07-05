<script lang="ts" setup>
interface Props {
  markdown: string;
}

const props = defineProps<Props>();
</script>

<template>
  <UCard>
    <template #header>Ruta optimizada</template>

    <article
      class="p-2 prose bg-gray-700 rounded dark:text-white"
      v-html="props.markdown"
    ></article>
  </UCard>
</template>
