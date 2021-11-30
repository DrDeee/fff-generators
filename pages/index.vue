<template>
  <section>
    <b-tabs animation="test" destroy-on-hide>
      <b-tab-item class="tab-content" label="Social Media-Nachrichten">
        <socialmedia />
      </b-tab-item>
      <b-tab-item class="tab-content" label="Versammlungsanzeige">
        <veranstaltungsanzeige />
      </b-tab-item>
      <b-tab-item class="tab-content" label="Pressemitteilungen">
        Der Pressemitteilungs-Generator ist noch in Arbeit!
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<style scoped>
.tab-content {
  min-height: 50vh;
}
</style>
