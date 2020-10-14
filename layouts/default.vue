<template>
  <div>
    <!--
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy.png" alt="Buefy" height="28" />
        </a>
      </div>
    </nav>
    -->

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>

    <footer class="footer">
      <div class="has-text-centered">
        <a href="https://fridaysforfuture.de/impressum/">Impressum</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Demoanmeldung',
          icon: '',
          to: { name: 'index' },
        },
        {
          title: 'Pressemitteilungen',
          icon: '',
          to: { name: 'press_release' },
        },
      ],
    }
  },
}
</script>
