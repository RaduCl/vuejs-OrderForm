<template>
  <div class="quote-description">
    <label>Notes</label><br>
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
  props: ['notes'],
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
</style>