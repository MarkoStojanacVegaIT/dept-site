<template>
    <header class="flex justify-between bg-black px-20 py-10">
        <div>
            <a href="/"><img :src="LogoImg" alt="dept logo image"></a>
        </div>

        <nav>
            <ul class="flex uppercase text-white">
                <li class="px-6">
                    <a href="javascript:;">Work</a>
                </li>
                <li class="px-6">
                    <a href="javascript:;">Culture</a>
                </li>
                <li class="px-6">
                    <a href="javascript:;">Services</a>
                </li>
                <li class="px-6">
                    <a href="javascript:;">Insights</a>
                </li>
                <li class="px-6">
                    <a href="javascript:;">Careers</a>
                </li>
                <li class="px-6">
                    <a href="javascript:;">Contact</a>
                </li>
            </ul>
        </nav>

    </header>
</template>

<script setup>
import LogoImg from '@/assets/logos/dept-logo-white.svg'

</script>

<style lang="scss" scoped>

</style>