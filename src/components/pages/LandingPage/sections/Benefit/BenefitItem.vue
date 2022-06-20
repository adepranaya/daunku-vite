<template>
  <div class="flex gap-4">
    <img
      :src="benefit.img"
      alt=""
      class="w-20 h-20"
    />
    <div class="flex-1 flex flex-col justify-center">
      <h3>{{ benefit.title }}</h3>
      <p class="font-light text-gray-500">{{ benefit.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  benefit: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
