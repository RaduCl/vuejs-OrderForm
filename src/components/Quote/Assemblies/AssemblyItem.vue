
<template>
  <div class="line-item assembly-item" >

    <input
      name="assemlbyItemName"
      type="text"
      class="form-control flex3"
      placeholder="Enter assembly item name here..."
      :value="assembly.name"
      @blur="updateName"
    >

    <input
      name="assemlbyItemQuantity"
      type="text"
      class="form-control flex2" id=""
      placeholder="0"
      @blur="updateQty"
      :value="assembly.qty"
    >

    <input
      name="assemlbyItemTime"
      type="text"
      class="form-control flex2" id=""
      placeholder="0"
      @blur="updatePrice"
      :value="assembly.time"
    >

    <input
      name="assemlbyItemMargin"
      type="text"
      class="form-control flex2" id=""
      placeholder="0"
      @blur="updateMargin"
      :value="assembly.margin"
    >

    <div class="flex2">{{ totalAssemblyItemPrice }}$</div>

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
  props: ['assembly'],
  computed: {
    totalAssemblyItemPrice() {
      return 0;
      // return this.assembly.price * this.assembly.qty * this.assembly.margin;
    },
  },
  methods: {
    ...mapMutations([
      'EDIT_LINE_ITEM_QTY',
      'DELETE_LINE_ITEM',
      'EDIT_LINE_ITEM_NAME',
      'EDIT_LINE_ITEM_MARGIN',
      // 'UPDATE_UNIT_TOTAL_VALUES',
    ]),
    updateQty(e) {
      const qty = e.target.value.trim();
      // TODO add number value validation here
      const lineItem = this.assembly;
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
      const lineItem = this.assembly;
      this.EDIT_LINE_ITEM_NAME({
        lineItem,
        name,
      });
    },
    updatePrice(e) {
      const price = e.target.value.trim();
      const lineItem = this.assembly;
      this.EDIT_LINE_ITEM_PRICE({
        lineItem,
        price,
      });
    },
    updateMargin(e) {
      const margin = e.target.value.trim();
      const lineItem = this.assembly;
      this.EDIT_LINE_ITEM_MARGIN({
        lineItem,
        margin,
      });
    },
    deleteLineItem() {
      this.DELETE_LINE_ITEM('assemblyItems', this.index);
    },
  },
};
</script>

<style lang="sass">

</style>