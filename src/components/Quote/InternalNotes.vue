InternalNotes
<template>
  <div class="quote-description">
    <p>Internal Notes</p>
    <textarea type="text" id="quote-internal-notes" rows="6" 
      placeholder="Enter internal notes here..."
      @blur="updateInternalNotes"
      :value="internalNotes"
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
      'UPDATE_QUOTE_INTERNAL_NOTES',
    ]),
    updateInternalNotes(e) {
      const text = e.target.value;
      // const description = this;
      // TODO add text validation here if required
      this.UPDATE_QUOTE_INTERNAL_NOTES({
        text,
      });
    },
  },
};
</script>

<style lang="sass">
.quote-internal-notes
  padding-top: 50px;
</style>