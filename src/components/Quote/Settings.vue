<template>
  <div class="quote-settings">
    <label for="quote-description">Settings</label> <a @click="refreshSettings()"></a><br>
    <div class="quote-settings-header">
      <div class="flex1" title="Multiplies assembly and setup costs">Overtime factor</div>
      <div class="flex1" title="Multiplies assembly, setup, overtime">Discount %</div>
      <div class="flex1">Over 5 hour cost</div>
      <div class="flex1">Under 5 hour cost</div>
      <div class="flex1">Worker Hourly Cost</div>
      <div class="flex1">Default Margin</div>
    </div>
    <div class="quote-settings-body">
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.overTimeFactor"/>
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.discountFactor"/>
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.overFiveCost"/>
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.underFiveCost"/>
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.workerHourlyCost"/>
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.defaultMarginMultiplier"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['settings'],
  methods: {
    ...mapMutations([
      'UPDATE_QUOTE_INTERNAL_NOTES',
    ]),
    // updateInternalNotes(e) {
    //   const text = e.target.value;
    //   // const description = this;
    //   // TODO add text validation here if required
    //   this.UPDATE_QUOTE_INTERNAL_NOTES({
    //     text,
    //   });
    // },
  },
};
</script>

<style lang="sass">
.quote-settings
  margin-top: 50px;
.quote-settings-header, .quote-settings-body
  display: flex;
  > *
    margin: 10px;
</style>