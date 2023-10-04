<script setup>
import { storeToRefs } from "pinia";
import { useArticlesStore } from "@/stores/articlesStore";
import { SORT_ORDER } from "@/consts";

//Use articles central state
const articlesStore = useArticlesStore();
let { articles } = storeToRefs(articlesStore);

//Handle articles filtering
const searchText = ref("");
const selectedCategory = ref("");
const sortOrder = ref("");

const sortArticles = (articles, order) => {
  const sortedAscending = articles.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  switch (order.toLowerCase()) {
    case SORT_ORDER.ASC:
      return sortedAscending;
    case SORT_ORDER.DESC:
      return sortedAscending.reverse();
    default:
      return articles;
  }
};

const filteredArticles = computed(() => {
  const filteredByTitle = articles.value.filter((article) => {
    return article.title.toLowerCase().includes(searchText.value.toLowerCase());
  });
  const sortedArticles = sortArticles(filteredByTitle, sortOrder.value);
  const filteredByCategory = sortedArticles.filter((article) => {
    return (
      !selectedCategory.value ||
      article.category.toLowerCase() === selectedCategory.value.toLowerCase()
    );
  });
  return filteredByCategory;
});
</script>

<template>
  <div>
    <div class="bg-black py-[50px]">
      <div class="container mx-auto">
        <h1 class="text-white mb-[10px] uppercase">Filter by:</h1>
        <input
          class="w-[30%] p-[10px] rounded mr-[20px] placeholder:text-black"
          v-model="searchText"
          placeholder="Title"
          type="text"
        />
        <select
          class="w-[30%] p-[10px] rounded mr-[20px]"
          v-model="selectedCategory"
          placeholder="Category"
          name="category"
          id="category"
        >
          <option value="">Category</option>
          <option
            v-for="article in articles"
            :value="article.category"
            :key="article.key"
          >
            {{ article.category }}
          </option>
        </select>
        <select
          class="w-[30%] p-[10px] rounded"
          v-model="sortOrder"
          placeholder="Category"
          name="category"
          id="category"
        >
          <option value="">Sort order</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
    <ColumnWrapper numOfColumns="2">
      <div v-for="article in filteredArticles">
        <ArticleBox
          v-if="filteredArticles"
          :article="article"
          :key="article.id"
        />
      </div>
    </ColumnWrapper>
  </div>
</template>
