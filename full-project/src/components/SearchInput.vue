<template>
  <div class="input-group mb-3">
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