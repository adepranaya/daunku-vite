<template>
  <footer class="bg-gradient-to-r from-dark1 to-dark text-white">
    <Container class="flex justify-between gap-8 py-12">
      <div class="w-1/2">
        <div class="font-bold font-heading text-4xl">NewsLetter</div>
        <div class="relative w-full flex mt-8">
          <input
            type="text"
            class="bg-white/20 py-4 px-7 border-white rounded-full border w-full focus:outline-none focus:border-primary1 focus:ring-primary1 focus:ring-1"
            placeholder="Enter your email"
          />
          <button
            class="absolute top-2 right-2 flex items-center justify-center bg-gradient-primary rounded-full px-4 py-2"
          >
            subcribe
          </button>
        </div>
      </div>

      <div class="w-1/5 ml-24">
        <h2 class="font-heading text-2xl mb-6">Support</h2>
        <ul class="font-thin space-y-2">
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </div>
      <div class="w-1/5">
        <h2 class="font-heading text-2xl mb-6">Useful Link</h2>
        <ul class="font-thin space-y-2">
          <li>Payment & Tax</li>
          <li>Team of service</li>
          <li>Privaci Policy</li>
        </ul>
      </div>
      <div class="w-1/5">
        <h2 class="font-heading text-2xl mb-6">Our Menu</h2>
        <ul class="font-thin space-y-2">
          <li>Best Product</li>
          <li>Category</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <div class="w-1/5">
        <h2 class="font-heading text-2xl mb-6">Address</h2>
        <ul class="font-thin space-y-2">
          <li>JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia</li>
          <li>hallo@daunku.com</li>
        </ul>
      </div>
    </Container>
    <Container>
      <hr class="border-white border w-full" />
      <p class="text-center pt-14 pb-24">© {{ new Date().getFullYear() }} Daunku - All rights reserved.</p>
    </Container>
  </footer>
</template>
