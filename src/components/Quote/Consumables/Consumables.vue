<template>
  <div class="consumables-block">

    <div class="unit-header">
      <div class="flex3">Consumable items</div>
      <div class="flex2">Quantity</div>
      <div class="flex2">Cost</div>
      <div class="flex2">Margin</div>
      <div class="flex2">Total Price</div>
      <div class="flex1"></div>
    </div>

    <div class="unit-body">
      <consumable-item
        v-for="(consumable, index) in consumableItems"
        :consumable="consumable"
        :index="index"
      ></consumable-item>
    </div>

    <div class="unit-controls">
      <button type="button" class="btn btn-default"
        @click="addLineItem"
      >+ Add line item</button>
    </div>

    <div class="unit-summary">
      <div class="flex3"></div>
      <div class="flex2"></div>
      <div class="flex2"></div>
      <div class="flex2"></div>
      <div class="flex2">{{totalUnitPrice}}</div>
      <div class="flex1"></div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ConsumableItem from './ConsumableItem';
export default {
  props: ['consumableItems'],
  computed: {
    totalUnitPrice() {
      return this.$store.state.quote.unit.consumableItems
        .reduce((acc, x) => acc + x.price * x.qty * x.margin, 0);
    },
  },
  components: {
    ConsumableItem,
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
      };
      this.ADD_LINE_ITEM({
        lineItemType: 'consumablesItems',
        newLineItem: lineItem,
      });
    },
  },
};
</script>

<style lang="sass">

</style>