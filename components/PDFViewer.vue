<template>
  <iframe :src="dataUrl + '#toolbar=0&view=fitH'"></iframe>
</template>

<style scoped>
iframe {
  width: 100%;
  min-height: 75vh;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    dataUrl: {
      type: String,
      required: true,
      default: '',
    },
    refresh: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
  mounted() {
    if (this.refresh) this.refresh()
  },
})
</script>
