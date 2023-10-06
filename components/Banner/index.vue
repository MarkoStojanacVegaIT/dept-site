<script setup>
import BackgroundImage from '@/assets/images/banner-image.jpg'
</script>

<template>
    <section :style="`background-image: url('${BackgroundImage}')`" class="relative h-[70vh] bg-cover  bg-center">
        <div class="container mx-auto">
            <div class="absolute max-w-[600px] text-white bottom-20">
                <span class="text-base block mb-[30px] uppercase">Work</span>
                <h1 class="text-[34px] leading-[34px]">
                    A selection of projects that <strong>pioneer tech</strong> and <strong>marketing</strong> to help brands
                    stay ahead.
                </h1>
            </div>
            <div>
            </div>
        </div>
    </section>
</template>

