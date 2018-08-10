<template>
<div>
  <v-app id="inspire">
    <test class="hello" ref="article" :item="item"></test>
    <v-navigation-drawer
      fixed
      app
    >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Samachar
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

      <v-list dense class="pt-0">
        <v-list-tile v-for="(item,index) in items" :key="index" @click="fetchNews(item)">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="(category,catIndex) in categories" :key="catIndex" @click="fetchNewsWithCategory(category)">
          <v-list-tile-action>
            <v-icon>{{category}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{category}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    <article></article>
    
        
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>Samachar</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>

  <article></article>
</div>
</template>

<script>
import axios from "axios";
import Article from "./article.vue";
import Test from "./test.vue";
export default {
  components: {
    Article,
    Test
  },
  data() {
    return {
      drawer: null,
      items: ["Home", "India", "World", "Local"],
      categories: ["Business", "Technology", "Sports"],
      articles: [],
      item: null
    };
  },
  methods: {
    fetchNews(item) {
      console.log("item", item);
      this.item = item;
      this.$refs.article.getData(item);
    },
    fetchNewsWithCategory(category) {
      this.$refs.article.getDataWithCategory(category);
    }
  },
  props: {
    source: String
  }
};
</script>
<style>
.hello {
  margin-top: 100px;
}
</style>
