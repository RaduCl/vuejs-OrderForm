<template>
  <div class="quote-unit">
    <table class="table">
      <thead>
        <tr>
          <th>Line items</th>
          <th>Quantity</th>
          <th></th>
          <th>Price</th>
          <th>Total Price</th>
          <th>Time/Sec</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!--<line-item></line-item>-->
        <line-item 
          v-for="(lineItem, index) in components" 
          v-bind:lineItem="lineItem"
          v-bind:index="index"
        ></line-item>
      </tbody>
    </table>
    <button type="button" class="btn btn-default">+ Add line item</button>
    <table class="table">
      <tbody>
        <tr>
          <td class="invis">Line items</td>
          <td class="invis">Quantity</td>
          <td></td>
          <td class="invis">Price</td>
          <td>{{totalPrice}}</td>
          <td>{{totalExecutionTime}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import LineItem from './LineItem';
export default {
  data() {
    return {
    };
  },
  components: {
    LineItem,
  },
  computed: {
    components() {
      return this.$store.state.quote.unit.components;
    },
    totalPrice() {
      return this.$store.state.quote.unit.components
        .map(x => x.totalPrice)
        .reduce((acc, x) => acc + x, 0);
    },
    totalExecutionTime() {
      return this.$store.state.quote.unit.components
        .map(x => x.totalExecutionTime)
        .reduce((acc, x) => acc + x, 0);
    },
  },
};
</script>

<style lang="sass">
.quote-unit 
  padding-top: 50px;
  /*background-color: #eaeaea;*/
  th
    text-align: left;
  tr
    padding: 10px;
  .invis
    opacity: 0;

</style>