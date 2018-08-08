<template>
  <v-app id="inspire">
    <v-navigation-drawer dark
      v-model="drawer"
      fixed
      app
    >
      <v-list dense >
        <v-list-tile v-for="(item,index) in items" :key="index">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    <article></article>
      
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
</template>

<script>
import axios from "axios";
import Article from "./article.vue";
export default {
  components: {
    Article
  },
  data() {
    return {
      drawer: null,
      items: [
        "Home",
        "India",
        "World",
        "Local",
        "Business",
        "Technology",
        "Sports"
      ],
      articles: []
    };
  },
  methods: {
    async getData() {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=52c9bc2716ac458399b833f99904263b`
      );
      console.log("data", data);
      this.articles = data.articles;
    }
  },
  mounted() {
    this.getData();
  },
  props: {
    source: String
  }
};
</script>