<template>
  <div class="quote-description">
    <label>Description</label><br>
    <textarea type="text" id="quote-description" rows="6" 
      placeholder="Enter quote description here..."
      @blur="updateDescription"
      :value="description"
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
      'UPDATE_QUOTE_DESCRIPTION',
    ]),
    updateDescription(e) {
      const text = e.target.value;
      // const description = this;
      // TODO add text validation here if required
      this.UPDATE_QUOTE_DESCRIPTION({
        text,
      });
    },
  },
};
</script>

<style lang="sass">
</style>