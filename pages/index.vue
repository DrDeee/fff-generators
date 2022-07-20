<template>  <div>
    <div
      class="is-size-4 has-text-centered is-uppercase has-text-weight-bold pb-3"
    >
      Willkommen
    </div>
    <div class="card mt-3">
      <div class="card-content">
        <div class="content">
          <b>Herzlich Willkommen bei unserem wundertollen FFF-Generatoren!</b>
          <br />
          <br />
          <b>Was könnt ihr hier machen?</b><br />
          Ihr könnt ganz einfach die für eure Aktionen die Demoanmeldung,
          Pressemitteilungen oder Social Media-Nachrichten erstellen lassen! Ihr
          gebt einfach alle wichtigen Informationen ein, und bekommt die Texte,
          schön formatiert oder sogar als PDF, das ihr gemütlich an euer
          Ordnungsamt oder an eure Lokalpresse schicken könnt!
          <br />
          <br />
          <b>Achtung:</b><br />
          Es kann sein, dass ihr je nach Situation bei euch vor Ort für eure
          Demo auch ein Hygienekonzept braucht, nutzt dafür gerne die Vorlagen
          der Corona Taskforce
          <a
            href="https://wiki.fridaysforfuture.is/index.php?title=Infektionsschutz#Infektionsschutzkonzepte"
            target="_blank"
            >hier</a
          >.
          <br />
          <br />
          <b>Ihr bemerkt Fehler oder habt noch Fragen/Probleme?</b><br />
          Meldet euch doch bitte über beim
          <a href="https://wa.me/4915678731731">Techsupport</a>
          <br />
          <br />
          <b>Hinweis:</b><br />
          Diese Generatoren sind offen für alle und stehen zu eurer freien
          Verfügung, solange sie nicht genutzt werden, um
          menschenrechtsfeindliche oder faschistische Aktionen zu unterstützen.
        </div>
      </div>
      <footer class="card-footer">
        <nuxt-link to="/versammlungsanzeigen" class="card-footer-item"
          >Versammlungsanzeigen</nuxt-link
        >
        <nuxt-link to="/pressemitteilungen" class="card-footer-item"
          >Pressemitteilungen</nuxt-link
        >
        <nuxt-link to="/socialmedia" class="card-footer-item"
          >Social Media-Nachrichten</nuxt-link
        >
      </footer>
    </div>
  </div>
</template>

<style>
.disabled {
  cursor: default;
  color: #363636;
}
</style>
