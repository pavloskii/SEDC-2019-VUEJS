<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <div class="input-group mb-3">
      <input
        @blur="setSearchText($event.target.value)"
        type="text"
        class="form-control"
        placeholder="Search..."
        :value="searchText"
      />

      <!-- <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="searchAds">Search</button>
      </div>-->
    </div>

    <div>
      <ul>
        <li v-for="item in filteredAds" :key="item.id">{{item.title}} - {{ item.price}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
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
      if (this.searchText == "") {
        return this.ads;
      }
      const searchedQuery = this.ads.filter(ad => ad.title == this.searchText);

      return searchedQuery;
    }
  }
};
</script>