<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueFormsAioSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VueFormsAioSample,
  // }
});
</script>

<template>
  <div id="app">
    <vue-forms-aio-sample />
  </div>
</template>
