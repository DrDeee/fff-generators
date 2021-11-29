<template>
  <div>
    <div class="icon-text">
      <b-icon
        v-if="state === '+'"
        pack="fas"
        type="is-success"
        icon="check-square"
        class="level-left"
      ></b-icon>
      <b-icon
        v-else-if="state === '0'"
        pack="fas"
        type="is-warning"
        icon="minus-square"
        class="level-left"
      ></b-icon>
      <b-icon
        v-else
        pack="fas"
        type="is-danger"
        icon="square"
        class="level-left"
      ></b-icon>
      <span>{{ description }}</span>
    </div>
    <br>
  </div>
</template>

<style scoped>
.icon-text {
  align-items: flex-start;
  color: inherit;
  display: inline-flex;
  flex-wrap: wrap;
  line-height: 1.5rem;
  vertical-align: top;
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    state: {
      type: String,
      default: '+',
    },
    description: {
      type: String,
      default: '',
    },
  },
})
</script>
