<template>
    <div id="app" class="container">
        <h1 class="mb-4 text-center">Minhas Finanças</h1>

        <FinanceAdd v-on:add-item="itemAdded" />

        <FinanceList :items="items" />
    </div>
</template>

<script>
import axios from 'axios';

import Finance from './classes/finance';

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
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
            const apiBase = 'https://evening-badlands-20922.herokuapp.com/financas/semana';

            axios.get(apiBase)
            .then(response => {
                response.data.forEach(info => {
                    this.items.push(new Finance(
                        info.item,
                        new Date(info.data),
                        parseInt(info.quantidade, 10),
                        parseFloat(info.valor)
                    ));
                });
            });
        },
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
    color: #2c3e50;
    margin-top: 60px;
}
</style>
