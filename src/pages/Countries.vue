<template>
  <div>
    <Header title="Sytuacja na świecie" />
    <div class="mb-4">
      <small>Dane aktualne na {{date}}</small>
    </div>

  </div>
</template>

<script>
import Header from "../components/Header.vue";


export default {
  name: "Summary",
  components: {
    Header,
  },
  data() {
    return {
      date: null,
      countries: null
    };
  },
  mounted() {
    this.axios.get("https://api.covid19api.com/summary").then(r => {
      this.date = new Date(r.data.Date);
      this.countries = r.data.Countries;
      console.log(r.data);
      
    });
  },
  methods: {

  }
};
</script>