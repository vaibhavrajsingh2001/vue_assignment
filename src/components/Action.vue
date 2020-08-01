<template>
    <div>
        <h3>Actions</h3>
        <Dropdown
            v-bind:options="allActionServices"
            v-on:optionSelected="fetchData"
            v-on:optionDeleted="deleteActionService"
        />
        <Dropdown v-if="showActions" v-bind:options="actions" />
        <Dropdown v-if="showActions" v-bind:options="dataSet" />
    </div>
</template>

<script>
import Dropdown from './miniComponents/Dropdown';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Action',
    components: {
        Dropdown,
    },
    computed: mapGetters(['allActionServices']),
    methods: {
        ...mapActions(['saveNewActionServices']),
        fetchData(service) {
            this.actions = this.$store.getters.getActions(service);
            this.dataSet = this.$store.getters.getActionDataset(service);
            this.showActions = true;
        },
        deleteActionService(services) {
            this.saveNewActionServices(services);
            this.showActions = false;
        },
    },
    data() {
        return {
            showActions: false,
            actions: null,
            dataSet: null,
        };
    },
};
</script>

<style>
</style>