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

export default {
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