<template>
  <div class="main-quote">
    <div class="main-quote-container">

      <quote-header></quote-header>
      
      <button type="button" class="btn btn-default">Import quote data</button>

      <description v-bind:description="descriptionText"></description>

      <unit></unit>

    </div>
  </div>
</template>

<script>
import QuoteHeader from './Header';
import Description from './Description';
import Unit from './Unit';

export default {
  data() {
    return {
    };
  },
  components: {
    QuoteHeader,
    Description,
    Unit,
  },
  computed: {
    descriptionText() {
      return this.$store.state.quote.description;
    },
  },
};
</script>

<style lang="sass">
.main-quote
    background-color: #fdf8f1;
    flex: 3;
    display: flex;
    justify-content: center;
    overflow-y: scroll;

    .main-quote-container
      width: 70%;
      padding-top: 50px;
</style>