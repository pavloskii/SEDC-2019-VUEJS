<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <SearchInput :value="searchText" @search="searchText = $event" />
    <div>
      <ul>
        <li v-for="item in filteredAds" :key="item.id">{{item.title}} - {{ item.price}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput";

export default {
  data() {
    return {
      title: "SEDC Reklama",
      searchText: "",
      ads: [
        {
          id: 1,
          image: "",
          price: 99.99,
          currency: "MKD",
          title: "Televizor eftin",
          description: "Cena po dogovor"
        },
        {
          id: 2,
          image: "",
          price: 3000.99,
          currency: "MKD",
          title: "Tocak",
          description: "Biser tocak 92"
        }
      ]
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
    SearchInput: SearchInput
  }
};
</script>