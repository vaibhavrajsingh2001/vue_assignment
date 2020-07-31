<template>
    <div>
        <h3>Actions</h3>
        <Dropdown v-bind:options="['X','Y','Z']" />
    </div>
</template>

<script>
import Dropdown from './miniComponents/Dropdown';
export default {
    name: 'Action',
    components: {
        Dropdown,
    },
};
</script>

<style>
</style>