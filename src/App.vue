<template>
    <div id="app" class="container">
        <FinanceAdd v-on:add-item="itemAdded" />
        <FinanceList :items="items" />
    </div>
</template>

<script>
import FinanceAdd from './components/FinanceAdd.vue';
import FinanceList from './components/FinanceList.vue';

export default {
    name: 'MinhasFinancas',
    components: {
        FinanceAdd,
        FinanceList,
    },
    data() {
        return {
            items: [],
        }
    },
    methods: {
        itemAdded(value) {
            this.items.push(value);
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
