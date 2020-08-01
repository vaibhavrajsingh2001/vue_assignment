<template>
    <div>
        <h3>TRIGGERS</h3>
        <Dropdown
            v-bind:options="allTriggerServices"
            v-on:optionSelected="fetchData"
            v-on:optionDeleted="deleteService"
        />
        <Dropdown v-if="showTriggers" v-bind:options="triggers" v-on:optionDeleted="deleteTrigger" />
        <Dropdown
            v-if="showTriggers"
            v-bind:options="dataSet"
            v-on:optionDeleted="deleteTriggerDataSet"
        />
    </div>
</template>

<script>
import Dropdown from './miniComponents/Dropdown';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Trigger',
    components: {
        Dropdown,
    },
    computed: mapGetters(['allTriggerServices']),
    methods: {
        ...mapActions([
            'saveNewTriggerServices',
            'saveNewTriggers',
            'saveNewTriggerDataSet',
        ]),
        fetchData(service) {
            this.currentTriggersService = service;
            this.triggers = this.$store.getters.getTrigger(service);
            this.dataSet = this.$store.getters.getTriggerDataset(service);
            this.showTriggers = true;
        },
        deleteService(services) {
            if (services.length >= 1) {
                this.saveNewTriggerServices(services);
                this.showTriggers = false;
            }
        },
        deleteTrigger(triggers) {
            if (triggers.length >= 1) {
                let triggerService = this.currentTriggersService;
                this.saveNewTriggers({ triggers, triggerService });
                this.triggers = triggers;
            }
        },
        deleteTriggerDataSet(dataSet) {
            if (dataSet.length >= 1) {
                let triggerService = this.currentTriggersService;
                this.saveNewTriggerDataSet(dataSet, triggerService);
                this.dataSet = dataSet;
            }
        },
    },
    data() {
        return {
            showTriggers: false,
            triggers: null,
            dataSet: null,
            currentTriggersService: null,
        };
    },
};
</script>

<style>
</style>