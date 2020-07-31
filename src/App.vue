<template>
    <div id="app">
        <div class="container">
            <Trigger />
        </div>
        <div class="container">
            <Action />
        </div>
    </div>
</template>

<script>
import Trigger from './components/Trigger';
import Action from './components/Action';

export default {
    name: 'App',
    components: {
        Trigger,
        Action,
    },
};
</script>

<style>
body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
}

.container {
    max-width: 40%;
    display: inline-block;
    margin: 0 5rem;
    overflow: auto;
    padding: 0 2rem;
    background: rgba(128, 128, 128, 0.24);
}
</style>
