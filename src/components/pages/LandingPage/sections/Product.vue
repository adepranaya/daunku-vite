<script setup lang="ts">
let productDummies = [
  {
    img: "/dummy/product-1.png",
    name: "Product 1",
    price: "$ 65.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/dummy/product-1.png",
  },
  {
    img: "/dummy/product-2.png",
    name: "Product 2",
    price: "$ 65.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/dummy/product-2.png",
  },
  {
    img: "/dummy/product-3.png",
    name: "Product 3",
    price: "$ 65.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/dummy/product-2.png",
  },
];
</script>

<template>
  <Container class="flex justify-between items-center bg-no-repeat">
    <div class="w-1/3">
      <h2 class="font-heading text-5xl mb-10 text-dark">
        Best seller <br />product
      </h2>
      <div>
        <a href="#" class="pr-10 py-4 inline-flex items-center gap-4 text-gray-700 group">
          See all colection <img src="/assets/icons/arrow-right.svg" alt=""  class="group-hover:translate-x-10 transition ease-in-out"/>
        </a>
      </div>
    </div>
    <div class="w-2/3 flex flex-col justify-end items-end">
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
    </div>
  </Container>
</template>
