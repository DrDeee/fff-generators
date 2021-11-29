<template>
  <div>
    <div class="container column">
      <b-navbar class="mb-3" shadow>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="logo.png" alt="Fridays for Future Logo" />
          </b-navbar-item>
        </template>
        <template #start>
          <b-navbar-item @click="$router.push('/')"> Willkommen </b-navbar-item>
          <b-navbar-item @click="$router.push('/versammlungsanzeigen')">
            Versammlungsanzeigen
          </b-navbar-item>
          <b-navbar-item
            tag="span"
            @click="/*$router.push('/pressemitteilungen')*/"
          >
            <b-tooltip
              position="is-bottom"
              class="cursor"
              multilined
              type="is-danger"
              :delay="400"
              label="Pressemitteilungen sind noch in Entwicklung :("
            >
              Pressemitteilungen</b-tooltip
            >
          </b-navbar-item>
          <b-navbar-item @click="$router.push('/socialmedia')">
            Social Media-Nachrichten
          </b-navbar-item>
        </template>

        <template #end>
          <b-navbar-item @click="$router.push('/impressum')"
            >Impressum</b-navbar-item
          >
        </template>
      </b-navbar>
      <div class="container column pt-5">
        <nuxt class="mt-5" />
      </div>
    </div>
  </div>
</template>
<style>
.foot {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  border-top: 0.5px solid #dbdbdb;
  padding: 2px;
  background-color: white;
}

.cursor {
  cursor: not-allowed;
}
</style>
