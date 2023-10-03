import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', {
    state: () => {
        return {
            articles: []
        }
    },
    getters: {
        getArticles: (state) => state
    },
    actions: {
        addArticles (data) {
            this.articles = data
        },
        filter: (param) => {
            return param
        }
    }
  })