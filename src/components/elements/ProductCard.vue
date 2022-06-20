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
    class="bg-periwinkle-gray drop-shadow-lg rounded-3xl flex flex-col justify-between relative"
  >
    <div>
      <img :src="link" alt="" height="100" class="h-60 -mt-24" />
      <div class="bg-white px-5 py-7 rounded-3xl mt-6">
        <h2 class="font-heading text-2xl">{{ name }}</h2>
        <div class="flex gap-2">
          <img src="/assets/icons/star.svg" alt="">
          <img src="/assets/icons/star.svg" alt="">
          <img src="/assets/icons/star.svg" alt="">
          <img src="/assets/icons/star.svg" alt="">
          <img src="/assets/icons/star.svg" alt="">
        </div>

        <div class="flex justify-between flex-1 items-center mt-12">
          <span class="text-2xl">{{ price }}</span>
          <button  class="w-14 h-14">
            <img src="/assets/icons/akar-icons_circle-plus-fill.svg" alt=""/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
