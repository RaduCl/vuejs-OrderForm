<template>
  <div class="quote-quantities">
    <label>Quantities</label><br>
    <table class="table quantities">
      <thead>
        <tr>
          <th>Units</th>
          <th>Consumables</th>
          <th>Assembly</th>
          <th>Setup Fee</th>
          <th>Discount</th>
          <th>Total Price</th>
          <th>Total Time</th>
          <th>Cost Per Unit</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <quantity
          v-for="(quantity, index) in quantities"
          :quantity="quantity"
          :index="index"
        >
        </quantity>
      </tbody>
    </table>
    <div class="unit-controls">
      <button
        type="button"
        class="btn btn-default"
        @click="addQuantity"
      >Add quantity</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Quantity from './QuantityItem';
export default {
  components: {
    Quantity,
  },
  computed: {
    quantities() {
      return this.$store.state.quote.unit.quantities;
    },
  },
  methods: {
    ...mapMutations([
      'ADD_QUANTITY',
    ]),
    addQuantity() {
      const newQuantity = {
        units: 0,
      };
      this.ADD_QUANTITY({
        newQuantity,
      });
    },
  },
};
</script>

<style lang="sass">
.quantities
  input
    max-width: 70px;
</style>