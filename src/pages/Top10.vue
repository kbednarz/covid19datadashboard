<template>
    <div>
        <Header title="Top 10" />
        <div class="row">
            <ListVue v-if="countries" :listItems="countries" property="NewRecovered" :size="7" listHeader="New recorded"></ListVue>
            <ListVue v-if="countries" :listItems="countries" property="NewDeaths" :size="7" listHeader="New deaths"></ListVue>
            <ListVue v-if="countries" :listItems="countries" property="TotalConfirmed" :size="7" listHeader="Total confirmed"></ListVue>
            <ListVue v-if="countries" :listItems="countries" property="TotalDeaths" :size="7" listHeader="Total deaths"></ListVue>
            <ListVue v-if="countries" :listItems="countries" property="TotalRecovered" :size="7" listHeader="Total recorded"></ListVue>
        </div>
    </div>
</template>
<script>
    import ListVue from '../components/List';
    import Header from "../components/Header";
    export default {
        name: "Top10",
        components: {
            ListVue,
            Header
        },
        data() {
            return {
                countries: null
            }
        },
        mounted() {
            this.axios.get("https://api.covid19api.com/summary").then(r => {
                this.countries = r.data.Countries;
            });
        }
    }
</script>