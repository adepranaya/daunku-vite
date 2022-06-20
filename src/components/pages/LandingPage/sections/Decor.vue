<script setup lang="ts">
let benefits = [
  {
    img: "/assets/icons/icon-park-outline_sun.svg",
    title: "Adjust Lighting",
    description:
      "When caring for indoor plants, make sure the room temperature is neither too cold nor too hot",
  },
  {
    img: "/assets/icons/akar-icons_water.svg",
    title: "Don't water too often",
    description:
      "Watering ornamental plants indoors does not have to be done every day.",
  },
  {
    img: "/assets/icons/charm_plant-pot.svg",
    title: "Don't water too often",
    description:
      "Watering ornamental plants indoors does not have to be done every day.",
  },
  {
    img: "/assets/icons/tabler_temperature.svg",
    title: "Fertilize regularly",
    description:
      "The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength",
  },
];
</script>

<template>
  <Container class="flex justify-between items-center bg-no-repeat">
    <div class="w-1/2">
      <h2 class="font-heading text-5xl pb-6">How to care <br> for plants</h2>
      <p class="pb-8 font-light">Take care of plants with all your heart</p>
      <div class="flex flex-col gap-4">
        <BenefitItem v-for="(item, index) in benefits" :key="index" :benefit="item"></BenefitItem>
      </div>
    </div>
    <img src="/assets/images/care-plan.png" alt="" class="w-2/5"/>
  </Container>
</template>
