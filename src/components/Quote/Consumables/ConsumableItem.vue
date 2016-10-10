
<template>
  <div class="line-item consumable-item" >

    <input
      name="consumableItemName"
      type="text"
      class="form-control flex3"
      placeholder="Enter consumable item name here..."
      :value="consumable.name"
      @blur="updateName"
    >

    <input
      name="consumableItemQuantity"
      type="text"
      class="form-control flex2" id=""
      placeholder="0"
      @blur="updateQty"
      :value="consumable.qty"
    >

    <input
      name="consumableItemPrice"
      type="text"
      class="form-control flex2" id=""
      placeholder="0"
      @blur="updatePrice"
      :value="consumable.price"
    >

    <input
      name="consumableItemMargin"
      type="text"
      class="form-control flex2" id=""
      placeholder="0"
      @blur="updateMargin"
      :value="consumable.margin"
    >

    <div class="flex2">{{ totalConsumableItemPrice }}$</div>

    <button
      class="flex1"
      @click="deleteLineItem"
    >
      <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
    </button>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: ['consumable'],
  computed: {
    totalConsumableItemPrice() {
      return this.consumable.price * this.consumable.qty * this.consumable.margin;
    },
  },
  methods: {
    ...mapMutations([
      'DELETE_LINE_ITEM',
      'EDIT_LINE_ITEM_QTY',
      'EDIT_LINE_ITEM_PRICE',
      'EDIT_LINE_ITEM_NAME',
      'EDIT_LINE_ITEM_MARGIN',
      'UPDATE_CONSUMABLE_ITEM_TOTAL',
    ]),
    updateQty(e) {
      const qty = e.target.value.trim();
      // TODO add number value validation here
      const lineItem = this.consumable;
      // console.log('lineItem: ', lineItem);
      if (qty) {
        this.EDIT_LINE_ITEM_QTY({
          lineItem,
          qty,
        });
        this.UPDATE_CONSUMABLE_ITEM_TOTAL(lineItem);
      }
    },
    updateName(e) {
      const name = e.target.value.trim();
      const lineItem = this.consumable;
      this.EDIT_LINE_ITEM_NAME({
        lineItem,
        name,
      });
    },
    updatePrice(e) {
      const price = e.target.value.trim();
      const lineItem = this.consumable;
      this.EDIT_LINE_ITEM_PRICE({
        lineItem,
        price,
      });
      this.UPDATE_CONSUMABLE_ITEM_TOTAL(lineItem);
    },
    updateMargin(e) {
      const margin = e.target.value.trim();
      const lineItem = this.consumable;
      this.EDIT_LINE_ITEM_MARGIN({
        lineItem,
        margin,
      });
      this.UPDATE_CONSUMABLE_ITEM_TOTAL(lineItem);
    },
    deleteLineItem() {
      this.DELETE_LINE_ITEM('consumableItems', this.index);
      // this.UPDATE_UNIT_TOTAL_VALUES();
    },
  },
};
</script>

<style lang="sass">

</style>