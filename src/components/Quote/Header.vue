<template>
  <div class="main-quote-header">
    <h1>Quote #{{ quoteId }}</h1>
    <h5>{{ companyName }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quoteId: '10342',
      companyName: 'A company name - contact',
    };
  },
};
</script>

<style>

</style>