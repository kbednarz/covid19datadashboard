<template>
  <div>
    <div class="mb-4">
      <small>Dane aktualne na {{date}}</small>
    </div>
    <div v-if="summary" class="row row-cols-1 row-cols-md-3">
      <infobox title="Nowe przypadki" v-bind:text="formatNumber(summary.NewConfirmed)" />
      <infobox title="Wszystkie przypadki" v-bind:text="formatNumber(summary.TotalConfirmed)" />
      <infobox title="Dzisiaj zmarło" v-bind:text="formatNumber(summary.NewDeaths)" />
      <infobox title="Łącznie zmarło" v-bind:text="formatNumber(summary.TotalDeaths)" />
      <infobox title="Dzisiaj wyzdrowiało" v-bind:text="formatNumber(summary.NewRecovered)" />
      <infobox title="Łącznie wyzdrowiało" v-bind:text="formatNumber(summary.TotalRecovered)" />
    </div>

    <!-- <line-chart :chart-data="datacollection"></line-chart> -->
    <!-- <button @click="fillData()">Randomize</button> -->
  </div>
</template>
<script>
import LineChart from "../components/chart/LineChart.js";
import Infobox from "../components/Infobox.vue";

export default {
  name: "Dashboard",
  components: {
    LineChart,
    Infobox
  },
  data() {
    return {
      date: null,
      summary: null
      // datacollection: null,
    };
  },
  mounted() {
    // this.fillData();
    this.axios.get("https://api.covid19api.com/summary").then(r => {
      this.date = new Date(r.data.Date);
      this.summary = r.data.Global;
      console.log(this.date, this.summary);
    });
  },
  methods: {
    formatNumber(num) {
      return num;
    }
    // fillData() {
    //   this.datacollection = {
    //     labels: [this.getRandomInt(), this.getRandomInt()],
    //     datasets: [
    //       {
    //         label: "Data One",
    //         backgroundColor: "#f87979",
    //         data: [this.getRandomInt(), this.getRandomInt()],
    //       },
    //       {
    //         label: "Data One",
    //         backgroundColor: "#f87979",
    //         data: [this.getRandomInt(), this.getRandomInt()],
    //       },
    //     ],
    //   };
    // },
    // getRandomInt() {
    //   return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    // },
  }
};
</script>


<style scoped>
.infobox {
  margin: 1em;
}
</style>