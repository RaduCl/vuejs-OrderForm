<template>
  <tr class="line-item">
    <td>{{ lineItem.name }}</td>
    <td>
      <input type="text" class="form-control" name="quantity" id="" placeholder="0"
        @blur="changeQty"
        :value="lineItem.qty"
      >
    </td>
    <td>x</td>
    <td>{{ lineItem.price }}</td>
    <!--<td>{{ totalPrice }}$</td>-->
    <td>{{ lineItem.totalPrice }}$</td>
    <td>{{ lineItem.executionTime }}</td>
    <td>
      <button
        @click="deleteLineItem"
      >
        <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
      </button>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: ['lineItem', 'index'],
  computed: {
    totalPrice() {
      return this.lineItem.price * this.lineItem.qty;
    },
  },
  methods: {
    ...mapMutations([
      'EDIT_LINE_ITEM_QTY',
      'DELETE_LINE_ITEM',
      'UPDATE_UNIT_TOTAL_VALUES',
    ]),
    changeQty(e) {
      const qty = e.target.value.trim();
      // TODO add number value validation here
      const lineItem = this.lineItem;
      // console.log('lineItem: ', lineItem);
      if (qty) {
        this.EDIT_LINE_ITEM_QTY({
          lineItem,
          qty,
        });
        this.UPDATE_UNIT_TOTAL_VALUES();
      }
    },
    deleteLineItem() {
      this.DELETE_LINE_ITEM(this.index);
    },
  },
};
</script>

<style lang="sass">
.line-item
  input
    max-width: 50px;
    display: initial;
  button
    color: red;
  td
    vertical-align: middle !important;
</style>