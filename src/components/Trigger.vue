<template>
    <div>
        <h3>TRIGGERS</h3>
        <Dropdown v-bind:options="allServices" v-on:optionSelected="fetchData" />
        <Dropdown v-if="showTriggers" v-bind:options="triggers" />
        <Dropdown v-if="showTriggers" v-bind:options="dataSet" />
    </div>
</template>

<script>
import Dropdown from './miniComponents/Dropdown';
import { mapGetters } from 'vuex';

export default {
    name: 'Trigger',
    components: {
        Dropdown,
    },
    computed: mapGetters(['allServices']),
    methods: {
        fetchData(service) {
            this.triggers = this.$store.getters.getTrigger(service);
            this.dataSet = this.$store.getters.getDataset(service);
            console.log(this.triggers);
            console.log(this.dataSet);
            this.showTriggers = true;
        },
    },
    data() {
        return {
            showTriggers: false,
            triggers: null,
            dataSet: null,
        };
    },
};
</script>

<style>
</style>