<template>
    <div class="grid grid-cols-2 gap-0" :class="`grid-cols-${numOfColumns}`">
        <slot/>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        numOfColumns: number
    }
    const props: Props = defineProps(['numOfColumns'])
</script>