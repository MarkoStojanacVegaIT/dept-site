<script setup>
    //Fetch data
    const route = useRoute()
    const routeId = route.params.id
    const { data: article } = await useFetch(`/api/${routeId}`, {
        transform: (data) => data.data
    })
</script>

<template>
    <div class="w-[1000px] mx-auto text-center py-[100px]">
        <img class="mx-auto mb-[20px]" :src="article.imgUrl" alt="article image">
        <span class="uppercase font-bold">{{ article.category }}</span>
        <h1 class="text-black text-[35px] mb-[30px] ">{{ article.title }}</h1>
        <div class="w-[500px] mx-auto">{{ article.details }}</div>
    </div>
</template>