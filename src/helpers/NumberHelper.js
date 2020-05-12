const currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const numberFormatter = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 4 });

export default class NumberHelper {
    static currency(value) {
        return currencyFormatter.format(value);
    }

    static number(value) {
        return numberFormatter.format(value);
    }
}
