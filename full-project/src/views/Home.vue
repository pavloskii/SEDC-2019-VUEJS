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
        :id="item.id"
      />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput";
import Card from "../components/Card";

export default {
  created() {
    this.$store.dispatch("fetchAds");
  },
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    setSearchText(value) {
      this.searchText = value;
    }
  },
  computed: {
    filteredAds() {
      const searchedQuery = this.$store.state.ads.filter(
        ad =>
          ad.title.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0 ||
          ad.description.toLowerCase().indexOf(this.searchText.toLowerCase()) >=
            0
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