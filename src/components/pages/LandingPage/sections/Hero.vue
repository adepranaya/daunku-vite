<template>
  <div
    class="bg-[url('/assets/images/bg-hero.png')] bg-cover bg-center min-h-[1080px] relative"
  >
    <FurNavbar class="py-10"></FurNavbar>
    <Container
      class="flex flex-col justify-center items-center py-10 text-center text-white gap-8"
    >
      <h1 class="text-7xl mt-10">
        Bring Serenity to Your Place <br />
        With Interior Plants
      </h1>
      <p class="font-light text-2xl">
        find your dream plant for you home decoration <br />with us, and we will
        make it happen.
      </p>
      <div class="relative w-1/3 flex">
        <input
          type="text"
          class="bg-white/20 py-4 px-7 border-white rounded-full border w-full"
          placeholder="Search Plant"
        />
        <button
          class="absolute top-2 right-2 flex items-center justify-center bg-gradient-primary rounded-full p-2"
        >
          <img src="/assets/icons/search.svg" alt="search_ic" />
        </button>
      </div>
      <div
        class="h-56 w-full absolute bottom-0 bg-gradient-to-t from-white"
      ></div>
    </Container>
    <PlantCircleButton position="left-36 top-[600px] "></PlantCircleButton>
    <PlantCircleButton position="left-20 top-[430px] "></PlantCircleButton>
    <PlantCircleButton position="right-24 top-[630px] "></PlantCircleButton>
  </div>
</template>
