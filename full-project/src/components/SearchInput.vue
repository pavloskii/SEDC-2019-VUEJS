<template>
  <div class="input-group mb-3">
    <!-- @blur="setSearchText($event.target.value)" -->
    <input type="text" class="form-control" placeholder="Search..." :value="value" />
  </div>
</template>

<script>
export default {
  props: ["value", "soBilo"]
};
</script>