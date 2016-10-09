<template>
  <div class="quote-unit">
    <table class="table">
      <thead>
        <tr>
          <th>Line items</th>
          <th>Quantity</th>
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
    <button type="button" class="btn btn-default"
      @click="ADD_LINE_ITEM"
    >+ Add line item</button>
    <div class="unit-summary">
      <div class="flex3"></div>
      <div class="flex2"></div>
      <div class="flex2">{{totalPrice}}</div>
      <div class="flex2">{{totalExecutionTime}}</div>
      <div class="flex1"></div>
    </div>
    <div class="unit-header">
      <div class="flex3">Line items</div>
      <div class="flex2">Quantity</div>
      <div class="flex2">Price</div>
      <div class="flex2">Total Price</div>
      <div class="flex2">Time/Sec</div>
      <div class="flex1"></div>
    </div>
  </div>
</template>

<script>
import LineItem from './LineItem';
import { mapMutations } from 'vuex';

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
  methods: {
    ...mapMutations([
      'ADD_LINE_ITEM',
    ]),
    addLineItem() {
      const lineItem = {
        name: '',
        price: 0,
        executionTime: 0,
        qty: 0,
      };
      this.ADD_LINE_ITEM(lineItem);
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
  .unit-summary
    display: flex;
    border-top: 1px solid lightgray;
    padding-bottom: 5px;
    font-weight: bold;
  .unit-header
    display: flex;
    border-bottom: 1px solid lightgray;
    padding-bottom: 5px;
    font-weight: bold;
  .flex3
    flex: 3;
  .flex2
    flex: 2;
  .flex1
    flex: 1;

</style>