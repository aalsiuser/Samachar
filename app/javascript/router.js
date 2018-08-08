import Vue from "vue/dist/vue.js";
import Router from "vue-router";
import Index from "./components/main/Index.vue";
import Article from "./components/main/article.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/index",
      name: "Index",
      component: Index
    },
    {
      path: "/article",
      name: "Article",
      component: Article
    }
  ]
});

export default router;
