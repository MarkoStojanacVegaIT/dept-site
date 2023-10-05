<script setup lang="ts">
import { IArticle } from "~/types/article";

const props = defineProps(["spanRange", "article"]);
const { id, category, title, imgUrl }: IArticle = props.article;

const printSpanRangeClass = () => {
  const classes: any = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
  };
  return classes[props.spanRange];
};
</script>

<template>
  <section
    :style="`background-image: url('${imgUrl}')` "
    class="relative h-[70vh] bg-cover bg-center after:absolute after:w-full after:h-full after:inset-y-0 after:bg-black/40"
    :class="printSpanRangeClass()"
  >
    <div class="p-[30px]">
      <div class="absolute text-white bottom-[30px] z-10">
        <span class="text-base block mb-[30px] uppercase" data-test="category">{{ category }}</span>
        <h2 class="text-[48px] leading-[48px] mb-[20px]" data-test="title">
          {{ title }}
        </h2>
        <NuxtLink :to="`/work/${id}`" class="text-base hover:underline"
          >Read more</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
