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
        :value="settings.overTimeFactor"
        @blur="updateOverTimeFactor"
      />
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.discountFactor"
        @blur="updateDiscountFactor"
      />
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.overFiveCost"
        @blur="updateOverFiveCost"
      />
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.underFiveCost"
        @blur="updateUnderFiveCost"
      />
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.workerRates"
        @blur="updateWorkerRates"
      />
      <input
        class="form-control flex1"
        type="text" 
        :value="settings.defaultMarginMultiplier"
        @blur="updateDefaultMarginMultiplier"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['settings'],
  methods: {
    ...mapMutations([
      'EDIT_CONFIG_OVERTIME',
      'EDIT_CONFIG_DISCOUNT',
      'EDIT_CONFIG_OVER_FIVE_COST',
      'EDIT_CONFIG_UNDER_FIVE_COST',
      'EDIT_CONFIG_WORKER_RATES',
      'EDIT_CONFIG_MARGIN',
    ]),

    updateOverTimeFactor(e) {
      const value = parseFloat(e.target.value);
      if (!value) return;
      this.EDIT_CONFIG_OVERTIME({
        value,
      });
    },

    updateDiscountFactor(e) {
      const value = parseFloat(e.target.value);
      if (!value) return;
      this.EDIT_CONFIG_DISCOUNT({
        value,
      });
    },

    updateOverFiveCost(e) {
      const value = parseFloat(e.target.value);
      if (!value) return;
      this.EDIT_CONFIG_OVER_FIVE_COST({
        value,
      });
    },

    updateUnderFiveCost(e) {
      const value = parseFloat(e.target.value);
      if (!value) return;
      this.EDIT_CONFIG_UNDER_FIVE_COST({
        value,
      });
    },

    updateWorkerRates(e) {
      const value = parseFloat(e.target.value);
      if (!value) return;
      this.EDIT_CONFIG_WORKER_RATES({
        value,
      });
    },

    updateDefaultMarginMultiplier(e) {
      const value = parseFloat(e.target.value);
      if (!value) return;
      this.EDIT_CONFIG_MARGIN({
        value,
      });
    },

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