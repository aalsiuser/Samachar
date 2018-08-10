<template>
  <div>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap v-for="(article,index) in articles" :key="index" >
    <v-flex xs12 sm6 offset-sm3 >
      <v-card width="750px" class="card-margin">
        <v-card-media
          :src="article.urlToImage"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{article.title}}</h3>
            <div>{{article.description}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange"><a :href="article.url" target="_blank">Explore</a></v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import axios from "axios";
import infiniteScroll from "vue-infinite-scroll";
export default {
  components: {
    infiniteScroll
  },
  data() {
    return {
      articles: [],
      source: null,
      busy: false
    };
  },
  methods: {
    async getData(item) {
      let countryCode = item.slice(0, 2);
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=52c9bc2716ac458399b833f99904263b`
      );
      this.articles = data.articles;
    },

    async getDataWithCategory(category) {
      let lowerCategory = category.toLowerCase();
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${lowerCategory}&apiKey=52c9bc2716ac458399b833f99904263b`
      );
      this.articles = data.articles;
    }
  }
};
</script>

<style>
.card-margin {
  margin-bottom: 10px;
}
</style>
