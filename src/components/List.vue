<template>
    <div class="col-sm-6 col-lg-4 mb-5">
        <ul class="list-group">
            <li class="list-group-item active"><a> {{ listHeader }}</a></li>
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in items"  :key="item.name">
                {{ item.Country }}<span class="badge badge-primary badge-pill">{{ item[property] }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TopList",
        props: {
            listItems: Array,
            property: String,
            size: Number,
            listHeader: String
        },
        data: () => {
            return {
                items: null,
            }
        },
        methods: {
          prepareList: function() {
              return this.listItems.sort((a, b) => b[this.property] - a[this.property] ).slice(0, this.size);
          }
        },
        mounted() {
            this.items = this.prepareList();
        }
    };
</script>
