<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <Sidebar class="col-12" />
      </div>
      <div class="row">
        <main role="main" class="col-12 ml-sm-auto px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./pages/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar
  }
};
</script>

<style>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
</style>
