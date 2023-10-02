<template>
    <div :style="`background-image: url('${BackgroundImage}')`" class="relative h-[70vh] bg-cover bg-center col-span-1" :class="`col-span-${spanRange}`">
        <div class="p-[30px]">
            <div class="absolute text-white bottom-[30px]">
                <span class="text-base block mb-[30px] uppercase">{{ category }}</span>
                <h2 class="text-[48px] leading-[48px] mb-[20px]">
                   {{ title }}
                </h2>
                <a class="text-base" href="javascript:;">Read more</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import BackgroundImage from '@/assets/images/banner-image.jpg'
const props = defineProps(['spanRange', "article"])
const {category, title} = props.article
</script>