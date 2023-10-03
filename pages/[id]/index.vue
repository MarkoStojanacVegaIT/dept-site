<script setup>
    const route = useRoute()
</script>

<template>
    <div class="text-center p-50">You are on a post id: {{ route.params.id }}</div>
</template>