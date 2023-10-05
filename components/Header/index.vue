<script setup>
import LogoImg from "@/assets/logos/dept-logo-white.svg";

const menuOpened = ref(false);
const toggleMenuPanel = () => {
  menuOpened.value = !menuOpened.value;
};
</script>

<template>
  <header class="flex justify-between bg-black px-20 py-10 font-normal">
    <div>
      <NuxtLink to="/"><img :src="LogoImg" alt="dept logo image" /></NuxtLink>
    </div>

    <nav class="flex items-center">
      <ul class="flex uppercase text-white px-[50px]">
        <li class="px-6 group">
          <NuxtLink to="/work" class="group-hover:underline">Work</NuxtLink>
        </li>
        <li class="px-6 group">
          <NuxtLink to="/culture" class="group-hover:underline"
            >Culture</NuxtLink
          >
        </li>
        <li class="px-6 group">
          <NuxtLink to="/services" class="group-hover:underline"
            >Services</NuxtLink
          >
        </li>
        <li class="px-6 group">
          <NuxtLink to="/insights" class="group-hover:underline"
            >Insights</NuxtLink
          >
        </li>
        <li class="px-6 group">
          <NuxtLink to="/careers" class="group-hover:underline"
            >Careers</NuxtLink
          >
        </li>
        <li class="px-6 group">
          <NuxtLink to="/contact" class="group-hover:underline"
            >Contact</NuxtLink
          >
        </li>
      </ul>
      <button @click="toggleMenuPanel">
        <nuxt-icon class="text-white text-[30px]" name="dots" />
      </button>
    </nav>
    <Transition>
      <div
        class="fixed bg-black h-full w-full top-0 bottom-0 left-0 z-30 px-[80px] py-[120px]"
        v-show="menuOpened"
      >
      <div class="absolute top-[40px] left-[80px]">
      <NuxtLink to="/"><img :src="LogoImg" alt="dept logo image" /></NuxtLink>
    </div>
        <button
          class="absolute top-[40px] right-[80px]"
          @click="toggleMenuPanel"
        >
          <nuxt-icon class="text-white text-[30px]" name="close" />
        </button>
        <ul class="uppercase text-white text-[35px] text-right"  @click="toggleMenuPanel">
            <li class="border-b py-[5px] hover:text-slate-600"><NuxtLink class="block animation-bounce" to="/">Home</NuxtLink></li>
            <li class="border-b py-[5px] hover:text-slate-600"><NuxtLink class="block animation-bounce" to="/work">Work</NuxtLink></li>
            <li class="border-b py-[5px] hover:text-slate-600"><NuxtLink class="block animation-bounce" to="/culture">Culture</NuxtLink></li>
            <li class="border-b py-[5px] hover:text-slate-600"><NuxtLink class="block animation-bounce" to="/services">Services</NuxtLink></li>
            <li class="border-b py-[5px] hover:text-slate-600"><NuxtLink class="block animation-bounce" to="/">Partners</NuxtLink></li>
            <li class="border-b py-[5px] hover:text-slate-600"><NuxtLink class="block animation-bounce" to="/">Stories</NuxtLink></li>
            <li class="border-b py-[5px] hover:text-slate-600"><NuxtLink class="block animation-bounce" to="/careers">Careers</NuxtLink></li>
            <li class="border-b py-[5px] hover:text-slate-600"><NuxtLink class="block animation-bounce" to="/">Events</NuxtLink></li>
            <li class="border-b py-[5px] hover:text-slate-600"><NuxtLink class="block animation-bounce" to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: left 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  left: 100%;
}
</style>
