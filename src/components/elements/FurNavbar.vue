<template>
  <header class="max-w-6xl m-auto flex justify-between">
    <div class="flex items-center basis-0 grow">
      <!-- assets -->
      <a href="/">
        <img src="/logo.svg" alt="" />
      </a>
    </div>
    <nav class="flex items-center text-white font-light">
      <ul class="inline-flex gap-8">
        <li>
          <a href="/home" class="font-bold text-gradient-primary">Home</a>
        </li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div class="flex items-center basis-0 grow justify-end">
      <div class="flex gap-4">
        <button class="relative">
          <img src="/assets/icons/solid_bag-shopping.svg" alt="" />
          <div
            class="bg-gradient-primary absolute p-1 rounded-full top-1 -right-2 w-6 h-6 flex justify-center items-center"
          >
            1
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<style sco></style>
