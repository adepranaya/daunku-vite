<template>
  <Container>
    <h2 class="text-5xl text-center">Interior Plant Reference</h2>
    <p class="text-center font-light mt-7">
      make your home so comfortable with refreshing plants
    </p>
    <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4 mt-20">
      <div class="bg-white drop-shadow-lg rounded-[60px] relative overflow-hidden group">
        <img
          src="/dummy/interior-1.png"
          alt=""
          class="object-fill w-full h-full"
        />
        <div class="group-hover:opacity-100 opacity-0 transition ease-in-out duration-300 absolute inset-0 flex justify-center items-center bg-black/30 z-10 text-white">
          <h3 class="text-3xl">living room</h3>
        </div>
      </div>
      <div class="bg-white drop-shadow-lg rounded-[60px] relative overflow-hidden group">
        <img
          src="/dummy/interior-3.png"
          alt=""
          class="object-fill w-full h-full"
        />
        <div class="group-hover:opacity-100 opacity-0 transition ease-in-out duration-300 absolute inset-0 flex justify-center items-center bg-black/30 z-10 text-white">
          <h3 class="text-3xl">study room</h3>
        </div>
      </div>
      <div class="row-span-2 bg-white drop-shadow-lg rounded-[60px] relative overflow-hidden group">
        <img
          src="/dummy/interior-2.png"
          alt=""
          class="object-fill w-full h-full"
        />
        <div class="group-hover:opacity-100 opacity-0 transition ease-in-out duration-300 absolute inset-0 flex justify-center items-center bg-black/30 z-10 text-white">
          <h3 class="text-3xl">dressing room</h3>
        </div>
      </div>
    </div>
  </Container>
</template>
