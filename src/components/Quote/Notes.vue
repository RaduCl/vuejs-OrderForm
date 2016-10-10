<template>
  <div class="quote-description">
    <p>Notes</p>
    <textarea type="text" id="quote-notes" rows="6" 
      placeholder="Enter quote related notes here..."
      @blur="updateNotes"
      :value="notes"
    >
    </textarea>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['description'],
  methods: {
    ...mapMutations([
      'UPDATE_QUOTE_NOTES',
    ]),
    updateNotes(e) {
      const text = e.target.value;
      // const description = this;
      // TODO add text validation here if required
      this.UPDATE_QUOTE_NOTES({
        text,
      });
    },
  },
};
</script>

<style lang="sass">
.quote-description
  padding-top: 50px;
</style>