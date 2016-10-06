<template>
  <tr class="line-item">
    <td>{{ lineItem.name }}</td>
    <td>
      <input type="text" class="form-control" name="quantity" id="" placeholder="0"
        @blur="changeQtyy"
        :value="lineItem.qty"
      >
    </td>
    <td>{{ lineItem.price }}</td>
    <td>x</td>
    <td>{{ totalPrice }}$</td>
    <td>{{ lineItem.executionTime }}</td>
    <td>
      <button>
        <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
      </button>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: ['lineItem'],
  computed: {
    totalPrice() {
      return this.lineItem.price * this.lineItem.qty;
    },
  },
  methods: {
    ...mapMutations([
      'changeQty',
    ]),
    changeQtyy(e) {
      const qty = e.target.value.trim();
      console.log('qty: ', qty);
      const lineItem = this.lineItem;
      console.log('lineItem: ', lineItem);
      if (qty) {
        this.changeQty({
          lineItem,
          qty,
        });
      }
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