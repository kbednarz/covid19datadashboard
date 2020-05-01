<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a class="navbar-brand" href="#">COVID-19 Dashboard</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/summary" class="nav-link" active-class="active">
            <span data-feather="home"></span>
            Podsumowanie
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/countries" class="nav-link" active-class="active">
            <span data-feather="globe"></span>
            Na świecie
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/country" class="nav-link" active-class="active">
            <span data-feather="flag"></span>
            W kraju
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">
            <span data-feather="bookmark"></span>
            O aplikacji
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import feather from "feather-icons/dist/feather.min.js";

export default {
  name: "Sidebar",
  mounted: function() {
    /* init feather icons */
    feather.replace();
  }
};
</script>

<style scoped>
.navbar-nav {
  width: 100%;
  justify-content: center;
  display: flex;
}

.nav-item {
  padding: 0 1rem;
}
</style>
