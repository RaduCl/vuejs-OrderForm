<template>
  <div class="line-item">

  <input
    name="lineItemName"
    type="text"
    class="form-control flex3"
    placeholder="Enter item name here..."
    :value="lineItem.name"
    @blur="updateName"
  >

  <input
    name="lineItemQuantity"
    type="text"
    class="form-control flex2" id=""
    placeholder="0"
    @blur="updateQty"
    :value="lineItem.qty"
  >

  <input
    name="lineItemPrice"
    type="text"
    class="form-control flex2" id=""
    placeholder="0"
    @blur="updatePrice"
    :value="lineItem.price"
  >

  <div class="flex2">{{ totalLineItemPrice }}$</div>

  <input
    name="lineItemExecutionTime"
    type="text"
    class="form-control flex2" id=""
    placeholder="0"
    @blur="updateExecutionTime"
    :value="lineItem.executionTime"
  >

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
  props: ['lineItem', 'index'],
  computed: {
    totalLineItemPrice() {
      return this.lineItem.price * this.lineItem.qty;
    },
  },
  methods: {
    ...mapMutations([
      'EDIT_LINE_ITEM_QTY',
      'DELETE_LINE_ITEM',
      'EDIT_LINE_ITEM_NAME',
      'EDIT_LINE_ITEM_PRICE',
      'EDIT_LINE_ITEM_EXECUTION_TIME',
      // 'UPDATE_UNIT_TOTAL_VALUES',
    ]),
    updateQty(e) {
      const qty = e.target.value.trim();
      // TODO add number value validation here
      const lineItem = this.lineItem;
      // console.log('lineItem: ', lineItem);
      if (qty) {
        this.EDIT_LINE_ITEM_QTY({
          lineItem,
          qty,
        });
        // this.UPDATE_UNIT_TOTAL_VALUES();
      }
    },
    updateName(e) {
      const name = e.target.value.trim();
      const lineItem = this.lineItem;
      this.EDIT_LINE_ITEM_NAME({
        lineItem,
        name,
      });
    },
    updatePrice(e) {
      const price = e.target.value.trim();
      const lineItem = this.lineItem;
      this.EDIT_LINE_ITEM_PRICE({
        lineItem,
        price,
      });
    },
    updateExecutionTime(e) {
      const time = e.target.value.trim();
      const lineItem = this.lineItem;
      this.EDIT_LINE_ITEM_EXECUTION_TIME({
        lineItem,
        time,
      });
    },
    deleteLineItem() {
      this.DELETE_LINE_ITEM(this.index);
      // this.UPDATE_UNIT_TOTAL_VALUES();
    },
  },
};
</script>

<style lang="sass">
.line-item
  display: flex;
  align-items: center;

  > *
    margin: 10px;

  button
    color: red;

</style>