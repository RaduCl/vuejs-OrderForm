<template>
  <div class="main-quote">
    <div class="main-quote-container">

      <quote-header></quote-header>
      
      <button type="button" class="btn btn-default">Import quote data</button>

      <settings v-bind:settings="quoteSettings"></settings>

      <description v-bind:description="descriptionText"></description>

      <unit></unit>

      <quantities></quantities>

      <notes  v-bind:notes="notesText"></notes>

      <internal-notes  v-bind:internalNotes="internalNotesText"></internal-notes>

      <calculations></calculations>

    </div>
  </div>
</template>

<script>
import QuoteHeader from './Header';
import Description from './Description';
import Notes from './Notes';
import Unit from './Unit';
import InternalNotes from './InternalNotes';
import Settings from './Settings';
import Quantities from './Quantities/Quantities';
import Calculations from './Calculations';

export default {
  data() {
    return {
    };
  },
  components: {
    QuoteHeader,
    Description,
    Unit,
    Quantities,
    Notes,
    InternalNotes,
    Settings,
    Calculations,
  },
  computed: {
    descriptionText() {
      return this.$store.state.quote.description;
    },
    notesText() {
      return this.$store.state.quote.notes;
    },
    internalNotesText() {
      return this.$store.state.quote.internalNotes;
    },
    quoteSettings() {
      // console.log('quote config: ', this.$store.state.quote.config)
      return this.$store.state.quote.config;
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

.flex3
  flex: 3;

.flex2
  flex: 2;

.flex1
  flex: 1;

.quote-description
  padding: 30px 0;
</style>