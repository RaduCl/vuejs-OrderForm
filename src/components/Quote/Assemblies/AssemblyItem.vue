
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
      @blur="updateTime"
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

    <div class="flex2">$ {{ totalAssemblyItemPrice }}</div>

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
  props: ['assembly', 'index', 'config'],
  computed: {
    totalAssemblyItemPrice() {
      const timeRelatedCost =
        this.assembly.time *
        (this.$store.state.quote.config.workerRates / 3600).toFixed(2);
      return (timeRelatedCost * this.assembly.qty * this.assembly.margin).toFixed(2);
    },
  },
  methods: {
    ...mapMutations([
      'EDIT_LINE_ITEM_NAME',
      'EDIT_LINE_ITEM_QTY',
      'EDIT_LINE_ITEM_EXECUTION_TIME',
      'EDIT_LINE_ITEM_MARGIN',
      'UPDATE_ASSEMBLY_ITEM_TOTAL',
      'DELETE_LINE_ITEM',
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
        this.UPDATE_ASSEMBLY_ITEM_TOTAL(lineItem);
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
    updateTime(e) {
      const time = e.target.value.trim();
      const lineItem = this.assembly;
      this.EDIT_LINE_ITEM_EXECUTION_TIME({
        lineItem,
        time,
      });
      this.UPDATE_ASSEMBLY_ITEM_TOTAL(lineItem);
    },
    updateMargin(e) {
      const margin = e.target.value.trim();
      const lineItem = this.assembly;
      this.EDIT_LINE_ITEM_MARGIN({
        lineItem,
        margin,
      });
      this.UPDATE_ASSEMBLY_ITEM_TOTAL(lineItem);
    },
    deleteLineItem() {
      const index = this.index;
      this.DELETE_LINE_ITEM({
        lineItemType: 'assemblyItems',
        index,
      });
    },
  },
};
</script>

<style lang="sass">

</style>