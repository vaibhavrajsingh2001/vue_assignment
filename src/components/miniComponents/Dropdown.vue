<template>
    <div>
        <select @change="$emit('optionSelected', $event.target.value)" v-model="currentValue">
            <option disabled value>Please select one</option>
            <option v-for="option in options" :key="option">{{option}}</option>
        </select>
        <button
            v-if="currentValue !== null && options.length >1"
            @click="$emit('optionDeleted', options.filter(option => option !== currentValue))"
        >X</button>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    props: ['options'],
    data() {
        return {
            currentValue: null,
        };
    },
};
</script>

<style>
</style>