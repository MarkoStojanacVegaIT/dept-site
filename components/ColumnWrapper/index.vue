<script setup>
    const props = defineProps(['numOfColumns'])

    const printComNumClass = () => {
        const classes = {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3"
        }
        return classes[props.numOfColumns]
    }
</script>

<template>
    <div class="grid gap-0" :class="printComNumClass()">
        <slot/>
    </div>
</template>
