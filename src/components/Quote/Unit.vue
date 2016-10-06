<template>
  <div class="quote-unit">
    <table class="table">
      <thead>
        <tr>
          <th>Line items</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
          <th>Total Price</th>
          <th>Time/Sec</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!--<line-item></line-item>-->
        <line-item v-for="lineItem in unit" v-bind:lineItem="lineItem"></line-item>
      </tbody>
    </table>
    <button type="button" class="btn btn-default">+ Add line item</button>
  </div>
</template>

<script>
import LineItem from './LineItem';
export default {
  data() {
    return {};
  },
  components: {
    LineItem,
  },
  computed: {
    unit() {
      return this.$store.state.unit;
    },
  },
};
</script>

<style lang="sass">
.quote-unit 
  max-width: 700px;
  padding-top: 50px;
  /*background-color: #eaeaea;*/
  th
    text-align: left;
  tr
    padding: 10px;

</style>