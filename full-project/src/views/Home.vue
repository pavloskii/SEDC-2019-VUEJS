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
      ads: [
        {
          id: 1,
          image:
            "https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_960_720.jpg",
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
    SearchInput: SearchInput,
    Card
  }
};
</script>