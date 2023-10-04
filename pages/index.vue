<script setup>
  //Fetch data
  const { data: articles } = await useFetch('/api/articles', {
    transform: (data) => data.data
  })
  //Set central state
  const articlesStore = useArticlesStore()
  articlesStore.addArticles(articles)
</script>

<template>
  <div>
      <Banner />
      <ColumnWrapper numOfColumns="2">
        <div v-for="(article, index) in articles">
          <ArticleBox v-if="index < 4" :article="article" :key="article.id"/>
        </div>
      </ColumnWrapper>

      <ColumnWrapper numOfColumns="3">
          <ArticleBox :article="{title: 'Rethinking the entire online ecosystem', category: 'Florensis', imgUrl: '/_nuxt/assets/images/img-5.png'}" spanRange="2"/>
          <ArticleListBox spanRange="1" />
      </ColumnWrapper>

      <ColumnWrapper numOfColumns="2">
        <ArticleBox :article="{title: 'Delivering clarity on a global scale', category: 'BE LIGHTNING', imgUrl: '/_nuxt/assets/images/img-5.png'}"/>
        <ArticleBox :article="{title: 'Swipe to find your next holiday destination', category: 'Tui', imgUrl: '/_nuxt/assets/images/img-5.png'}"/>
      </ColumnWrapper>

      <ColumnWrapper numOfColumns="3">
          <ArticleListBox spanRange="1" />
          <ArticleBox :article="{title: 'Rethinking the entire online ecosystem', category: 'Florensis', imgUrl: '/_nuxt/assets/images/img-6.png'}" spanRange="2"/>
      </ColumnWrapper>

      <ColumnWrapper numOfColumns="2">
        <div v-for="(article, index) in articles">
          <ArticleBox v-if="index >= 4 && index < 8" :article="article" :key="article.id"/>
        </div>
      </ColumnWrapper>

      <Quote />

      <ColumnWrapper numOfColumns="2">
        <div v-for="(article, index) in articles">
          <ArticleBox v-if="index >= 8" :article="article" :key="article.id"/>
        </div>
      </ColumnWrapper>

      <ContactForm />
  </div>
</template>
