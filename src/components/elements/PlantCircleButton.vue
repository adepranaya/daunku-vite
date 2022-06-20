<script lang="ts" setup>
defineProps({
  position: String
})
</script>

<template>
  <div class="absolute flex justify-center group" :class="position">
    <div
      class="group-hover:opacity-100 opacity-0 transform scale-0 group-hover:scale-100 transition-all ease-in-out duration-300 -top-24 absolute bg-white/20 backdrop-blur rounded-3xl border border-white text-white p-4 whitespace-no-wrap min-w-[180px]"
      
    >
      <h3 class="text-2xl font-bold">$65.00</h3>
      <p>Dracena Fragnas</p>
    </div>
    <button>
      <div
        class="bg-white/20 backdrop-blur rounded-full border border-white w-8 h-8 flex justify-center items-center"
      >
        <div class="bg-white w-2 h-2 rounded-full"></div>
      </div>
    </button>
  </div>
</template>
