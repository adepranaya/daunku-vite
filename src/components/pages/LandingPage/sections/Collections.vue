<template>
  <Container>
    <h2 class="font-heading text-5xl text-center mb-20">Collection</h2>
    <div class="grid grid-flow-col grid-rows-3 gap-4">
      <div
        class="bg-white drop-shadow-lg rounded-xl px-5 py-7 bg-[url('/dummy/collections/chairs.png')] h-52 bg-contain bg-right bg-no-repeat"
      >
        <h3 class="text-3xl font-heading">
          <span class="border-b border-light-50"> Chairs </span>
        </h3>
      </div>
      <div class="row-span-2 bg-white drop-shadow-lg rounded-xl px-5 py-7  bg-[url('/dummy/collections/sofas.png')] bg-contain bg-no-repeat flex justify-end">
        <h3 class="text-3xl font-heading">
          <span class="border-b border-light-50"> Sofas</span>
        </h3>
      </div>
      <div class="row-span-2 bg-white drop-shadow-lg rounded-xl px-5 py-7 bg-[url('/dummy/collections/tables.png')] bg-contain bg-right bg-no-repeat">
        <h3 class="text-3xl font-heading">
          <span class="border-b border-light-50"> Tables </span>
        </h3>
      </div>
      <div class="bg-white drop-shadow-lg rounded-xl px-5 py-7 bg-[url('/dummy/collections/lamps.png')] bg-contain bg-no-repeat flex justify-end items-end">
        <h3 class="text-3xl font-heading">
          <span class="border-b border-light-50"> Lamps</span>
        </h3>
      </div>
    </div>
  </Container>
</template>
