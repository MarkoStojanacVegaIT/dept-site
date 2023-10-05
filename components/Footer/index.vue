<script setup>
import LogoImg from '@/assets/logos/dept-logo-white.svg'
</script>

<template>
    <footer class="bg-black px-20 py-10 font-normal">
        <div class="flex justify-between border-b pb-[30px]">
            <div>
                <NuxtLink to="/"><img :src="LogoImg" alt="dept logo image"></NuxtLink>
            </div>
            <nav>
                <ul class="flex uppercase text-white">
                    <li class="px-6 group">
                        <NuxtLink to="/work" class="group-hover:underline">Work</NuxtLink>
                    </li>
                    <li class="px-6 group">
                        <NuxtLink to="/culture" class="group-hover:underline">Culture</NuxtLink>
                    </li>
                    <li class="px-6 group">
                        <NuxtLink to="/services" class="group-hover:underline">Services</NuxtLink>
                    </li>
                    <li class="px-6 group">
                        <NuxtLink to="/insights" class="group-hover:underline">Insights</NuxtLink>
                    </li>
                    <li class="px-6 group">
                        <NuxtLink to="/careers" class="group-hover:underline">Careers</NuxtLink>
                    </li>
                    <li class="px-6 group">
                        <NuxtLink to="/contact" class="group-hover:underline">Contact</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="flex justify-between pt-[30px]">
            <span class="block text-slate-500"><a href="javascript:;">Terms and conditions</a></span>
            <span class="block text-slate-500">© 2022 Dept Agency</span>
        </div>
    </footer>
</template>