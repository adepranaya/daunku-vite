<script lang="ts" setup>
defineProps({
  collection: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div
    class="bg-white drop-shadow-lg rounded-[60px] relative overflow-hidden group"
  >
    <img
      :src="collection.img"
      alt=""
      class="object-fill w-full h-full group-hover:scale-125 transition-transform duration-500"
    />
    <div
      class="group-hover:opacity-100 opacity-0 transition ease-in-out duration-300 absolute inset-0 flex justify-center items-center bg-black/30 z-10 text-white"
    >
      <h3 class="text-3xl">{{ collection.name }}</h3>
    </div>
  </div>
</template>
