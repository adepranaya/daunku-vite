<script setup lang="ts">
let productDummies = [
  {
    img: "/dummy/product-1.png",
    name: "Product 1",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/dummy/product-1.png",
  },
  {
    img: "/dummy/product-2.png",
    name: "Product 2",
    price: "$200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/dummy/product-2.png",
  },
];
</script>

<template>
  <div>
    <Container
      class="flex justify-between items-center my-10 bg-no-repeat"
      style="background-image: url('/assets/images/bg-product.svg')"
    >
      <div class="w-1/2">
        <h2 class="font-heading text-5xl mb-10 text-dark">
          Check our popular <br>product
        </h2>
        <div>
          <button class="bg-primary px-10 py-4 rounded-2xl text-white">
            Shopping Now
          </button>
        </div>
      </div>
      <div class="w-1/2 flex flex-col justify-end items-end">
        <div class="flex gap-6">
          <!-- loop -->
          <ProductCard
            v-for="(product, index) in productDummies"
            :key="index"
            :img="product.img"
            :name="product.name"
            :price="product.price"
            :description="product.description"
            :link="product.link"
          ></ProductCard>
        </div>
        <div class="flex gap-6 mt-5">
          <!-- loop -->
          <button class="bg-white px-4 py-3 border-2 border-primary">
            <img src="/assets/icons/arrow-left.svg" alt="">
          </button>
          <button class="bg-primary px-4 py-3">
            <img src="/assets/icons/arrow-right.svg" alt="">
          </button>
        </div>
      </div>
    </Container>
  </div>
</template>
