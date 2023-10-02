<script setup lang="ts">
  const { data: articles } = await useFetch('/api/articles', {
    transform: (data) => data.data
  })
</script>

<template>
  <div>
    {{ articles }}
      <Banner />
      <ColumnWrapper numOfColumns="2">
        <ArticleBox v-if="articles" v-for="article in articles" :article="article" :key="article.id" spanRange="2"/>
      </ColumnWrapper>
  </div>
</template>
