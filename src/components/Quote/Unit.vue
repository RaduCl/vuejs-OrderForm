<template>
  <div class="quote-unit">
    <consumables :consumableItems="consumableItems"></consumables>
    <assemblies :assemblyItems="assemblyItems"></assemblies>
  </div>
</template>

<script>
import Assemblies from './Assemblies/Assemblies';
import Consumables from './Consumables/Consumables';
// import { mapMutations } from 'vuex';

export default {
  data() {
    return {
    };
  },
  components: {
    Consumables,
    Assemblies,
  },
  computed: {
    components() {
      return this.$store.state.quote.unit.components;
    },
    totalUnitPrice() {
      return this.$store.state.quote.unit.components
        .reduce((acc, x) => acc + x.price * x.qty, 0);
    },
    totalUnitExecutionTime() {
      return this.$store.state.quote.unit.components
        .reduce((acc, x) => acc + x.executionTime * x.qty, 0);
    },
    consumableItems() {
      console.log('consumableItems ', this.$store.state.quote.unit.consumableItems);
      return this.$store.state.quote.unit.consumableItems;
    },
    assemblyItems() {
      console.log('assemblyItems ', this.$store.state.quote.unit.assemblyItems);
      return this.$store.state.quote.unit.assemblyItems;
    },
  },
  // methods: {
  //   ...mapMutations([
  //     'ADD_LINE_ITEM',
  //   ]),
  //   addLineItem() {
  //     const lineItem = {
  //       name: '',
  //       price: 0,
  //       executionTime: 0,
  //       qty: 0,
  //     };
  //     this.ADD_LINE_ITEM('components', lineItem);
  //   },
  // },
};
</script>

<style lang="sass">
.quote-unit 
  padding-top: 50px;
  /*background-color: #eaeaea;*/

  .unit-summary
    display: flex;
    border-top: 1px solid lightgray;
    font-weight: bold;

    > *
      margin: 10px;

  .unit-header
    display: flex;
    border-bottom: 1px solid lightgray;
    padding-bottom: 5px;
    font-weight: bold;

    > *
      margin: 5px 10px;

  .unit-body, .consumables-block
    display: flex;
    flex-direction: column;
    margin: 10px 0;

  .unit-controls
    margin: 20px 10px;
.line-item
  display: flex;
  align-items: center;

  > *
    margin: 10px;

  button
    color: red;

</style>