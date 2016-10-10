<template>
  <div class="main-quote">
    <div class="main-quote-container">

      <quote-header></quote-header>
      
      <button type="button" class="btn btn-default">Import quote data</button>

      <description v-bind:description="descriptionText"></description>

      <unit></unit>

      <notes></notes>

      <internal-notes></internal-notes>
      
    </div>
  </div>
</template>

<script>
import QuoteHeader from './Header';
import Description from './Description';
import Notes from './Notes';
import Unit from './Unit';
import InternalNotes from './InternalNotes';

export default {
  data() {
    return {
    };
  },
  components: {
    QuoteHeader,
    Description,
    Unit,
    Notes,
    InternalNotes,
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
  overflow-y: auto;

  .main-quote-container
    width: 70%;
    padding-top: 50px;
  
  textarea
    width: 100%;
</style>