<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search..." />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { title: "SEDC Reklama" };
  }
};
</script>