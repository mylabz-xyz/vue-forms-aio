<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormsAioButton", // vue component name
  props: {
    label: String,
  },
});
</script>

<template>
  <div class="ng-aio-control">
    <button
      type="submit"
      class="ng-aio-submit"
      @click="onSubmit()"
      :class="{
        'has-content': isSubmitted,
      }"
    >
      {{ label }}
    </button>
    <span [class]="themes[theme].focusClass"> <i></i></span>
  </div>
</template>

<style scoped>
</style>
