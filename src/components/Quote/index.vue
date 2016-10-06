<template>
  <div class="main-quote">

    <quote-header></quote-header>
    
    <button type="button" class="btn btn-default">Import quote data</button>

    <description></description>

    <unit></unit>

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

<style>
.main-quote {
    background-color: #fdf8f1;
    flex: 1;
    padding: 20px;
}
</style>