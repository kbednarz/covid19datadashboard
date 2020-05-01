<template>
  <div>
    <Header title="Sytuacja w kraju" />
    <div>
      <b-form-select v-model="selected" :options="availableCountries"></b-form-select>
    </div>
    <line-chart :chart-data="chartData" :options="chartOptions" v-if="chartData"></line-chart>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import LineChart from "../components/chart/LineChart.js";

var CHART_COLOR_1 = "#F5B7B1";
var CHART_COLOR_2 = "#85C1E9";

export default {
  components: {
    Header,
    LineChart
  },
  data() {
    return {
      availableCountries: null,
      selected: null,
      chartData: null,
      chartOptions: {
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "day"
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.axios.get("https://api.covid19api.com/countries").then(r => {
      this.availableCountries = r.data
        .map(c => ({
          value: c.Slug,
          text: c.Country
        }))
        .sort((a, b) => (a.text > b.text ? 1 : -1));
    });
  },
  methods: {
    fillChart: function(dayData) {
      dayData = dayData.filter(d => d.Country);
      var dateLabels = [];
      var confirmed = [];
      var recovered = [];
      var deaths = [];

      dayData.forEach(d => {
        dateLabels.push(d.Date);
        confirmed.push(d.Confirmed);
        recovered.push(d.Recovered);
        deaths.push(d.Deaths);
      });

      this.chartData = {
        labels: dateLabels,
        datasets: [
          {
            label: "Deaths",
            backgroundColor: "gray",
            data: deaths
          },
          {
            label: "Recovered",
            backgroundColor: CHART_COLOR_2,
            data: recovered
          },
          {
            label: "Confirmed",
            backgroundColor: CHART_COLOR_1,
            data: confirmed
          }
        ]
      };
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    selected: function(curr, prev) {
      this.axios
        .get(`https://api.covid19api.com/total/dayone/country/${curr}`)
        .then(r => {
          this.fillChart(r.data);
        });
    }
  }
};
</script>