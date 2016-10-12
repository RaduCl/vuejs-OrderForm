<template>
  <tr>
    <td>
      <input
        type="text"
        class="form-control"
        placeholder="0"
        @blur="updateUnits"
        :value="quantity.units"
      >
    </td>
    <td>$ {{ totalConsumableItemsPrice }}</td>
    <td>$ {{ totalAssemblyItemsPrice }}</td>
    <td>$ {{ setupFee }}</td>
    <td>$ {{ discount }}</td>
    <td>$ {{ totalPrice }}</td>
    <td>{{ totalTime }}</td>
    <td>$ {{ costPerUnit }}</td>
    <td>
      <button 
        @click="deleteQuantity">
        <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
      </button>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['quantity', 'index'],
  components: {
  },
  computed: {
    totalAssemblyItemsPrice() {
      const price = this.quantity.units * this.$store.state.quote.unit.assemblyItems
        .reduce((acc, x) => {
          const timeRelatedCost =
            x.time * (this.$store.state.quote.config.workerRates / 3600).toFixed(2);
          const totalPrice = (timeRelatedCost * x.qty * x.margin).toFixed(2);
          return acc + parseFloat(totalPrice);
        }, 0);
      return price.toFixed(2);
    },
    totalConsumableItemsPrice() {
      return this.quantity.units * this.$store.state.quote.unit.consumableItems
        .reduce((acc, x) => acc + x.price * x.qty * x.margin, 0);
    },
    setupFee() {
      return this.$store.state.quote.config.underFiveCost;
    },
    discount() {
      const discountFactor = this.$store.state.quote.config.discountFactor;
      const discount = (this.totalAssemblyItemsPrice + this.setupFee) * discountFactor;
      return discount.toFixed(2);
    },
    totalPrice() {
      const tcp = parseFloat(this.totalConsumableItemsPrice);
      const tap = parseFloat(this.totalAssemblyItemsPrice);
      const total = tcp + tap + parseFloat(this.setupFee) - parseFloat(this.discount);

      return tcp && tap ? total.toFixed(2) : 0;
    },
    totalTime() {
      return this.quantity.units * 1;
    },
    costPerUnit() {
      return this.totalPrice ? (this.totalPrice / this.quantity.units).toFixed(2) : 0;
    },
  },
  methods: {
    ...mapMutations([
      'EDIT_QUANTITY_UNITS',
      'DELETE_QUANTITY',
    ]),
    updateUnits(e) {
      const units = e.target.value.trim();
      // console.log('units: ', units);
      this.EDIT_QUANTITY_UNITS({
        quantityItem: this.quantity,
        qty: units,
      });
    },
    deleteQuantity() {
      const index = this.index;
      this.DELETE_QUANTITY({
        index,
      });
    },
  },
};
</script>

<style lang="sass">
</style>