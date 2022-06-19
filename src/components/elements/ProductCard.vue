<script setup>
// props img, name, price, description, link
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <div
    class="bg-white drop-shadow-lg rounded-xl px-5 py-7 flex flex-col justify-between"
  >
    <div class="mb-6">
      <img :src="link" alt="" height="100" class="h-60" />
      <div class="flex justify-between">
        <h2 class="font-heading text-2xl">{{ name }}</h2>
        <span class="font-bold">{{ price }}</span>
      </div>
      <p>{{ description }}</p>
    </div>
    <button class="bg-primary px-5 py-2 rounded-2xl text-white">
      Add to Chart
    </button>
  </div>
</template>
