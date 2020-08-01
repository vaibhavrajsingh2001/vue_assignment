<template>
    <div>
        <h3>ADD TRIGGER</h3>
        <div class="add">
            <form @submit="onSubmit">
                <label for="servicename">Enter a new Service</label>
                <input name="servicename" type="text" v-model="serviceName" />
                <label for="triggername">Enter triggers for the given service (comma separated)</label>
                <input name="triggername" type="text" v-model="triggers" />
                <label for="datasetname">Enter the data set (comma separated)</label>
                <input name="datasetname" type="text" v-model="dataSet" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddTrigger',
    data() {
        return {
            serviceName: null,
            triggers: null,
            dataSet: null,
        };
    },
    methods: {
        ...mapActions(['createNewTriggerService']),
        onSubmit(e) {
            e.preventDefault();
            let newServiceName = this.serviceName;
            let triggersArray = this.triggers.split(',');
            let dataSetarray = this.dataSet.split(',');
            this.createNewTriggerService({
                triggerService: newServiceName,
                triggers: triggersArray,
                dataSet: dataSetarray,
            });
            this.serviceName = null;
            this.triggers = null;
            this.dataSet = null;
        },
    },
};
</script>

<style scoped>
.add {
    width: min-content;
    height: max-content;
}

input[type='text'] {
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}

input[type='submit'] {
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
}
</style>