<template>
    <b-field class="navigation">
      <div class="control">
        <b-button
          type="is-primary"
          expanded
          icon-left="chevron-left"
          :disabled="navigationProps.previous.disabled"
          @click="navigationProps.previous.action"
          >Zurück</b-button
        >
      </div>
      <div class="control">
        <b-button
          type="is-primary"
          expanded
          icon-right="chevron-right"
          :disabled="navigationProps.next.disabled"
          @click="navigationProps.next.action"
          >Weiter</b-button
        >
      </div>
    </b-field>
</template>

<style scoped>
.navigation {
    justify-content: center;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    navigationProps() {
      return (this as any).$parent.navigationProps
    },
  },
})
</script>
