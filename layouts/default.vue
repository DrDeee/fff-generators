<template>
  <div>
    <div class="container column">
      <nuxt />
    </div>

    <footer class="foot is-primary">
      <div class="has-text-centered">
        <a href="https://fridaysforfuture.de/impressum/">Impressum</a>
      </div>
    </footer>
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
</style>

<script lang="ts">
import { DialogProgrammatic as Dialog } from 'buefy'

import Vue from 'vue'
export default Vue.extend({
  mounted() {
    Dialog.alert({
      title: 'Willkommen!',
      message: `<b>Herzlich Willkommen bei unserem wundertollen FFF-Generatoren!</b><br/>
        <br/><b>Was könnt ihr hier machen?</b><br/>Ihr könnt ganz einfach die
        für eure Aktionen die Demoanmeldung, Pressemitteilungen oder Social Media-Nachrichten erstellen lassen!
        Ihr gebt einfach alle wichtigen Informationen ein, und bekommt die Texte, schön formatiert oder sogar als PDF, das ihr gemütlich
        an euer Ordnungsamt oder an eure Lokalpresse schicken könnt!
        <br/><br/><b>Achtung:</b><br /> Es kann sein, dass ihr je nach Situation bei euch vor Ort für eure Demo auch ein
        Hygienekonzept braucht, nutzt dafür gerne die Vorlagen der Corona
        Taskforce <a href="https://wiki.fridaysforfuture.is/index.php?title=Infektionsschutz#Infektionsschutzkonzepte"
        target="_blank">hier</a>.<br/><br/><b>Ihr bemerkt Fehler oder habt
        noch Fragen/Probleme?</b><br/>Dann wendet euch sehr gerne an den
        <a href="https://wa.me/4915678731731">Techsupport-Bot</a>!<br/><br/>
        <b>Hinweis:</b><br />Diese Generatoren sind offen für alle und stehen zu eurer
        freien Verfügung, solange sie nicht genutzt werden, um menschenrechtsfeindliche
        oder faschistische Aktionen zu unterstützen.`,
      confirmText: 'Cool!',
    })
  },
})
</script>
