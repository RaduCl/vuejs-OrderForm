<template>
  <div class="quote-calculations">
    <label>Internal Calculations</label><br>
    <table class="table quantities">
      <thead>
        <tr>
          <th>Units</th>
          <th>Consumables Cost</th>
          <th>Worker Cost</th>
          <th>Total Cost</th>
          <th>Total Price</th>
          <th>Net Profit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ units }}</td>
          <td>{{ consumablesCost}}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    units() {
      return this.$store.state.quote.unit.quantities
        .map(x => x.units)
        .reduce((acc, x) => acc + parseFloat(x));
    },
    consumablesCost() {
      return this.$store.state.quote.unit.consumableItems
        .map(x => x.totalPrice)
        .reduce((acc, x) => acc + parseFloat(x));
    },
  },
};
</script>

<style lang="sass">

</style>