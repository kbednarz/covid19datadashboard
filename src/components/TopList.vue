<template>
    <div class="col-sm-4 col-lg-3">
        <ul class="list-group">
            <li class="list-group-item active"><a> {{ listHeader }}</a></li>
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in items"  :key="item.name">
                {{ item.name }}<span class="badge badge-primary badge-pill">{{ item.value }}</span>
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
        data: function() {
            let sorted = this.listItems.sort((a, b) => b[this.property] - a[this.property] ).slice(0, this.size);
            let self = this;
            let mapped = sorted.map((a) => {
                return {
                    name: a.Country,
                    value: a[self.property]
                }
            });
            return {
                items: mapped,
            }
        },
    };
</script>
