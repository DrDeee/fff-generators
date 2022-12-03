<template>
  <section>
    <b-tabs destroy-on-hide>
      <b-tab-item label="Willkommen">
        <welcome />
      </b-tab-item>
      <!--
      <b-tab-item label="Pressemitteilungen">
        <pressemitteilung />
      </b-tab-item>
      -->
      <b-tab-item label="Social Media-Nachrichten">
        <socialmedia />
      </b-tab-item>
      <b-tab-item label="Versammlungsanzeige">
        <veranstaltungsanzeige />
      </b-tab-item>
      <b-tab-item label="Impressum">
        <b-message type="is-info">
          Das Impressum findest du
          <a href="https://fridaysforfuture.de/impressum/">hier</a>.
        </b-message>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<style scoped>
.tab-content {
  min-height: 50vh;
}
</style>
