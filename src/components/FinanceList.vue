<template>
    <table class="table mt-4">
        <thead>
            <tr>
                <th>Item</th>
                <th>Data</th>
                <th>#</th>
                <th>$</th>
                <th>=</th>
            </tr>
        </thead>
        <tbody>
            <FinanceItem v-for="(item, index) in items"
                         :key="index"
                         :item="item.item"
                         :date="item.date"
                         :quantity="item.quantity"
                         :value="item.value" />
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4" class="text-right">Total de compras:</td>
                <td>{{ total }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
import NumberHelper from "../helpers/NumberHelper";
import FinanceItem from "./FinanceItem.vue";

export default {
    name: 'FinanceList',
    components: {
        FinanceItem
    },
    props: {
        items: {
            type: Array,
            required: true,
        }
    },
    computed: {
        total: function() {
            const value = typeof this.items !== 'undefined' ? this.items.reduce((value, e) => value += (e.quantity * e.value), 0) : 0;

            return NumberHelper.currency(value);
        }
    }
}
</script>

<style>

</style>