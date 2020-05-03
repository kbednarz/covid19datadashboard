<template>
  <div>
    <Header title="Sytuacja na świecie" />
    <div class="mb-4">
      <small>Dane aktualne na {{date | moment("DD-MM-YYYY")}}</small>
    </div>
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      :per-page="10"
      :current-page="currentPage"
      :sort-by="'TotalConfirmed'"
      :sort-desc="true"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="items.length"
      :per-page="10"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      date: null,
      countries: null,
      currentPage: 1,
      fields: [
        {
          key: "Country",
          sortable: true
        },
        {
          key: "NewConfirmed",
          sortable: true
        },
        {
          key: "TotalConfirmed",
          sortable: true
        },
        {
          key: "NewDeaths",
          sortable: true
        },
        {
          key: "TotalDeaths",
          sortable: true
        },
        {
          key: "NewRecovered",
          sortable: true
        },
        {
          key: "TotalRecovered",
          sortable: true
        }
      ],
      items: []
    };
  },
  mounted() {
    this.axios.get("https://api.covid19api.com/summary").then(r => {
      this.date = new Date(r.data.Date);
      this.items = r.data.Countries;
    });
  },
  methods: {}
};
</script>