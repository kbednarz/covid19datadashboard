<template>
  <div>
    <Header title="Podsumowanie" />
    <div class="mb-4">
      <small>Dane aktualne na {{date | moment("DD-MM-YYYY")}}</small>
    </div>
    <div v-if="summary" class="row row-cols-1 row-cols-md-3">
      <infobox title="Nowe przypadki" v-bind:text="formatNumber(summary.NewConfirmed)" />
      <infobox title="Wszystkie przypadki" v-bind:text="formatNumber(summary.TotalConfirmed)" />
      <infobox title="Dzisiaj zmarło" v-bind:text="formatNumber(summary.NewDeaths)" />
      <infobox title="Łącznie zmarło" v-bind:text="formatNumber(summary.TotalDeaths)" />
      <infobox title="Dzisiaj wyzdrowiało" v-bind:text="formatNumber(summary.NewRecovered)" />
      <infobox title="Łącznie wyzdrowiało" v-bind:text="formatNumber(summary.TotalRecovered)" />
      <bar-chart :chart-data="summary.confirmedChart"></bar-chart>
      <bar-chart :chart-data="summary.deathsChart"></bar-chart>
      <bar-chart :chart-data="summary.recoveredChart"></bar-chart>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BarChart from "../components/chart/BarChart.js";
import Infobox from "../components/Infobox.vue";

var CHART_COLOR_1 = "#F5B7B1";
var CHART_COLOR_2 = "#85C1E9";

export default {
  name: "Summary",
  components: {
    Header,
    BarChart,
    Infobox
  },
  data() {
    return {
      date: null,
      summary: null
    };
  },
  mounted() {
    this.axios.get("https://api.covid19api.com/summary").then(r => {
      this.date = new Date(r.data.Date);
      this.summary = r.data.Global;
      this.summary.confirmedChart = this.prepareData("Przypadki", [
        {
          label: "Nowe",
          data: [this.summary.NewConfirmed],
          backgroundColor: CHART_COLOR_1
        },
        {
          label: "Wszystkie",
          data: [this.summary.TotalConfirmed],
          backgroundColor: CHART_COLOR_2
        }
      ]);
      this.summary.deathsChart = this.prepareData("Zgony", [
        {
          label: "Nowe",
          data: [this.summary.NewDeaths],
          backgroundColor: CHART_COLOR_1
        },
        {
          label: "Wszystkie",
          data: [this.summary.TotalDeaths],
          backgroundColor: CHART_COLOR_2
        }
      ]);
      this.summary.recoveredChart = this.prepareData("Wyzdrowienia", [
        {
          label: "Nowe",
          data: [this.summary.NewRecovered],
          backgroundColor: CHART_COLOR_1
        },
        {
          label: "Wszystkie",
          data: [this.summary.TotalRecovered],
          backgroundColor: CHART_COLOR_2
        }
      ]);
    });
  },
  methods: {
    formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    prepareData(title, datasets) {
      return {
        labels: [title],
        datasets: datasets
      };
    }
  }
};
</script>