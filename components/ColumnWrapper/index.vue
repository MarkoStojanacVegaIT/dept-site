<script setup>
    const props = defineProps(['numOfColumns'])

    const printComNumClass = () => {
        const classes = {
            1: "lg:grid-cols-1",
            2: "lg:grid-cols-2",
            3: "lg:grid-cols-3"
        }
        return classes[props.numOfColumns]
    }
</script>

<template>
    <div class="grid gap-0 grid-cols-1" :class="printComNumClass()">
        <slot/>
    </div>
</template>
