<template>
    <div>
        <h3>ACTIONS</h3>
        <Dropdown
            v-bind:options="allActionServices"
            v-on:optionSelected="fetchData"
            v-on:optionDeleted="deleteActionService"
        />
        <Dropdown v-if="showActions" v-bind:options="actions" v-on:optionDeleted="deleteAction" />
        <Dropdown
            v-if="showActions"
            v-bind:options="dataSet"
            v-on:optionDeleted="deleteActionDataSet"
        />
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
        ...mapActions([
            'saveNewActionServices',
            'saveNewActions',
            'saveNewActionDataSet',
        ]),
        fetchData(service) {
            this.currentActionsService = service;
            this.actions = this.$store.getters.getActions(service);
            this.dataSet = this.$store.getters.getActionDataset(service);
            this.showActions = true;
        },
        deleteActionService(services) {
            if (services.length >= 1) {
                this.saveNewActionServices(services);
                this.showActions = false;
            }
        },
        deleteAction(actions) {
            if (actions.length >= 1) {
                let actionService = this.currentActionsService;
                this.saveNewActions({ actions, actionService });
                this.actions = actions;
            }
        },
        deleteActionDataSet(dataSet) {
            if (dataSet.length >= 1) {
                let dataSetService = this.currentActionsService;
                this.saveNewActionDataSet({ dataSet, dataSetService });
                this.dataSet = dataSet;
            }
        },
    },
    data() {
        return {
            showActions: false,
            actions: null,
            dataSet: null,
            currentActionsService: null,
        };
    },
};
</script>

<style>
</style>