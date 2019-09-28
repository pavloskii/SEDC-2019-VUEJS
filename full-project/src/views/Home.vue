<template>
  <div>
    <SearchInput :value="searchText" @search="searchText = $event" />
    <!-- <div>
      <ul>
        <li v-for="item in filteredAds" :key="item.id">{{item.title}} - {{ item.price}}</li>
      </ul>
    </div>-->
    <div class="card-columns">
      <Card
        v-for="item in filteredAds"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :price="item.price + ' ' + item.currency"
      />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import axios from "axios";

export default {
  created() {
    axios.get("https://sedc-ads.firebaseio.com/ads.json").then(response => {
      // const values = Object.values(response.data);
      // this.ads = values;
      const responseObject = response.data;

      // const remappedAds = Object.keys(responseObject).map(key => {
      //   const item = responseObject[key];
      //   item.id = key;
      //   return item;
      // });
      const remappedAds = Object.keys(responseObject).map(key => {
        return { id: key, ...responseObject[key] };
      });

      this.ads = remappedAds;
    });
  },
  data() {
    return {
      searchText: "",
      ads: []
    };
  },
  methods: {
    setSearchText(value) {
      this.searchText = value;
    }
  },
  computed: {
    filteredAds() {
      const searchedQuery = this.ads.filter(
        ad => ad.title.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0
      );

      return searchedQuery;
    }
  },
  components: {
    SearchInput: SearchInput,
    Card
  }
};
</script>