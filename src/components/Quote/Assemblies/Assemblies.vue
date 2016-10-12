<template>
  <div class="assemblies-block">

    <div class="unit-header">
      <div class="flex3">Assembly items</div>
      <div class="flex2">Quantity</div>
      <div class="flex2">Time/secs</div>
      <div class="flex2">Margin</div>
      <div class="flex2">Total Price</div>
      <div class="flex1"></div>
    </div>

    <div class="unit-body">
      <assembly
        v-for="(assembly, index) in assemblyItems"
        :assembly="assembly"
        :index="index"
      ></assembly>
    </div>

    <div class="unit-controls">
      <button type="button" class="btn btn-default"
        @click="addLineItem"
      >+ Add assembly item</button>
    </div>

    <div class="unit-summary">
      <div class="flex3"></div>
      <div class="flex2"></div>
      <div class="flex2"></div>
      <div class="flex2"></div>
      <div class="flex2">{{totalAssemblyItemsPrice}}</div>
      <div class="flex1"></div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Assembly from './AssemblyItem';
export default {
  props: ['assemblyItems'],
  computed: {
    totalAssemblyItemsPrice() {
      return this.$store.state.quote.unit.assemblyItems
        .reduce((acc, x) => acc + parseFloat(x.totalPrice), 0).toFixed(2);
    },
  },
  components: {
    Assembly,
  },
  methods: {
    ...mapMutations([
      'ADD_LINE_ITEM',
    ]),
    addLineItem() {
      const lineItem = {
        name: '',
        price: 0,
        qty: 0,
        margin: 0,
        time: 0,
      };
      this.ADD_LINE_ITEM({
        lineItemType: 'assemblyItems',
        newLineItem: lineItem,
      });
    },
  },
};
</script>

<style lang="sass">

</style>