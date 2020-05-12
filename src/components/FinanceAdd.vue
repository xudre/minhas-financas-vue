<template>
    <form class="FinanceAdd" @submit.prevent="addItem">
      <div class="form-group">
        <label for="item">Item</label>
        <input
          type="text"
          id="item"
          class="form-control"
          placeholder="Item"
          required
          v-model="item"
        />
      </div>
      <div class="form-group">
        <label for="data">Data</label>
        <input
          type="date"
          id="data"
          class="form-control"
          required
          v-model="data"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-6">
          <label for="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            class="form-control"
            min="1"
            step="1"
            required
            v-model="quantidade"

          />
        </div>
        <div class="form-group col-6">
          <label for="valor">Valor</label>
          <input
            type="number"
            name=""
            id="valor"
            class="form-control"
            min="1.00"
            step="0.10"
            required
            v-model="valor"

          />
        </div>
      </div>
      <input type="submit" name="Enviar" id="" class="btn btn-primary" />
    </form>
</template>

<script>
import Finance from "../classes/finance";
import DateHelpers from "../helpers/DateHelper";

export default {
    name: 'FinanceAdd',
  data(){
    return {
      item: "cinema",
      data: new Date().toISOString().slice(0,10),
      quantidade: 1,
      valor: 1.0
    }
  },
    computed: {

    },
    methods: {
        addItem() {
            const item = new Finance(
                this.item,
                DateHelpers.textoParaData(this.data),
                parseInt(this.quantidade, 10),
                parseFloat(this.valor)
            );

            this.$emit('add-item', item)

            this.item = ""
            this.data = ""
            this.quantidade = ""
            this.valor = ""
        }
    }
}
</script>

<style>

</style>
