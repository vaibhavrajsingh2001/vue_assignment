<template>
    <div>
        <p>
            <span>
                <select name="mode" @change="$emit('optionSelected', $event.target.value)">
                    <option v-for="option in options" :key="option">{{option}}</option>
                </select>
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    props: ['options'],
};
</script>

<style>
</style>