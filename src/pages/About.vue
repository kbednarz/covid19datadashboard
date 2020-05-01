<template>
  <div>
    <Header title="O aplikacji" />
    <div class="mb-4">
      <p>Covid-19 dashboard to aplikacja do monitorowania sytuacji związanej z koronawirusem na świecie.</p>
      <p>Aplikacja zostałą stworzona na potrzeby realizacji przedmiotu "Bogate Aplikacje Internetowe".</p>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  name: "About",
  components: {
    Header
  }
};
</script>