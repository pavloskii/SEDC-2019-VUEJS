<template>
  <div class="input-group mb-3 margin-top-10">
    <input
      @blur="setSearchText($event.target.value)"
      type="text"
      class="form-control"
      placeholder="Search..."
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    setSearchText(searchQuery) {
      this.$emit("search", searchQuery);
    }
  }
};
</script>

<style>
.margin-top-10 {
  margin-top: 10px;
}
</style>