<script setup lang="ts">
let collections = [
  {
    img: "/dummy/interior-1.png",
    name: "living room",
  },
  {
    img: "/dummy/interior-3.png",
    name: "study room",
  },
  {
    img: "/dummy/interior-2.png",
    name: "dressing room",
  },
];
</script>

<template>
  <Container>
    <h2 class="text-5xl text-center">Interior Plant Reference</h2>
    <p class="text-center font-light mt-7">
      make your home so comfortable with refreshing plants
    </p>
    <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4 mt-20">
      <template v-for="(item, index) in collections" :key="index">
        <CollectionItem :collection="item" :class="index == collections.length -1 ? 'row-span-2' : ''"></CollectionItem>
      </template>
    </div>
  </Container>
</template>
