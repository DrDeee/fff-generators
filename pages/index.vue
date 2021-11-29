<template>
  <section>
    <b-tabs v-model="activeTab">
      <b-tab-item class="tab-content" label="Demo-Anmeldungsgenerator">
        <demoanmeldungs-generator />
      </b-tab-item>
      <b-tab-item class="tab-content" label="Pressemitteilungs-Generator">
        Der Pressemitteilungs-Generator ist noch in Arbeit!
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<style scoped>
.tab-content {
  min-height: 50vh
}
</style>