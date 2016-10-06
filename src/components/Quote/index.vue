<template>
  <div class="main-quote">
    <div class="main-quote-container">

      <quote-header></quote-header>
      
      <button type="button" class="btn btn-default">Import quote data</button>

      <description></description>

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
      quoteId: '10342',
    };
  },
  components: {
    QuoteHeader,
    Description,
    Unit,
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
      width: 80%;
</style>