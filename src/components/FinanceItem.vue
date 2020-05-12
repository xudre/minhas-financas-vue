<template>
    <tr>
        <td class="text-left">{{ item }}</td>
        <td>{{ date | calendar }}</td>
        <td>{{ quantity }}</td>
        <td class="text-right">{{ value | currency }}</td>
        <td class="text-right">{{ total }}</td>
    </tr>
</template>

<script>
import NumberHelper from "../helpers/NumberHelper";

export default {
    name: 'FinanceItem',
    props: {
        item: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
    },
    filters: {
        calendar: (value) => {
            let day = value.getDate();
            let month = value.getMonth() + 1;

            if (day < 10) {
                day = `0${day}`;
            }

            if (month < 10) {
                month = `0${month}`;
            }

            return `${day}/${month}/${value.getFullYear()}`;
        },
        currency: (value) => {
            return NumberHelper.currency(value);
        },
    },
    computed: {
        total: function() {
            const q = parseInt(this.quantity, 10);
            const v = parseFloat(this.value);

            return NumberHelper.currency(q * v);
        }
    }
}
</script>

<style>

</style>