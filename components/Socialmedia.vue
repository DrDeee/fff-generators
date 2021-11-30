<template>
  <b-steps>
    <b-step-item step="1" label="Typ">
        <b-field>
            <b-select>
                <optgroup label="Demo">
                    <option>
                        Fahrraddemo
                    </option>
                    <option>
                        Sitzstreik
                    </option>
                </optgroup>
            </b-select>
        </b-field>
    </b-step-item>
   <b-step-item step="2" label="Typ">
    </b-step-item>
  </b-steps>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
