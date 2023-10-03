<script setup>
    const props = defineProps(['spanRange'])

    const printSpanRangeClass = () => {
        const classes = {
            1: "col-span-1",
            2: "col-span-2",
            3: "col-span-3"
        }
        return classes[props.spanRange]
    }
</script>

<template>
    <div class="h-[70vh] bg-black text-white col-span-1 p-[32px]" :class="printSpanRangeClass()">
       <ul class="h-[100%]">
            <li class="py-[30px] border-b-2 border-solid border-white h-[30%]">
                <h3 class="uppercase text-base mb-[10px]">Amazon</h3>
                <p class="text-base  mb-[10px]">Starting with delevering through drones</p>
                <a class="text-base hover:underline" href="javascript:;">Read more</a>
            </li>
            <li class="py-[30px] border-b-2 border-solid border-white h-[30%]">
                <h3 class="uppercase text-base mb-[10px]">O'neill</h3>
                <p class="text-base mb-[10px]">Integrating existing content into O’Neills’s new e-commerce platform</p>
                <a class="text-base hover:underline" href="javascript:;">Read more</a>
            </li>
            <li class="py-[30px] h-[30%]">
                <h3 class="uppercase text-base mb-[10px]">Microsoft</h3>
                <p class="text-base mb-[10px]">Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels</p>
                <a class="text-base hover:underline" href="javascript:;">Read more</a>
            </li>
       </ul>
    </div>
</template>

<style scoped></style>

