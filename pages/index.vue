<template>
  <form class="form">
    <b-steps>
      <b-step-item step="1" label="Veranstalter*in">
        <section class="section">
          <b-field label="Name">
            <b-input />
          </b-field>
          <b-field label="Straße & Hausnummer" expanded>
            <b-input />
          </b-field>
          <b-field label="Adresszusatz" expanded>
            <b-input />
          </b-field>
          <b-field horizontal expanded custom-class="is-hidden">
            <b-field label="Plz." expanded>
              <b-input />
            </b-field>
            <b-field label="Ort" expanded>
              <b-input />
            </b-field>
          </b-field>
        </section>
      </b-step-item>
      <b-step-item step="2" label="Demoleitung/Veranstalter*in">
        <b-field label="Name">
          <b-input />
        </b-field>
        <b-field label="Telefonnummer/Faxnummer">
          <b-input />
        </b-field>
        <b-field label="Straße & Hausnummer" expanded>
          <b-input />
        </b-field>
        <b-field label="Adresszusatz" expanded>
          <b-input />
        </b-field>
        <b-field horizontal expanded custom-class="is-hidden">
          <b-field label="Plz." expanded>
            <b-input />
          </b-field>
          <b-field label="Ort" expanded>
            <b-input />
          </b-field>
        </b-field>
      </b-step-item>
      <b-step-item step="3" label="Zeitlicher Ablauf">
        <b-field label="Tag der Veranstaltung">
          <b-datepicker> </b-datepicker>
        </b-field>
        <b-field label="Voraussichtlicher Start">
          <b-timepicker> </b-timepicker>
        </b-field>
        <b-field label="Voraussichtliches Ende">
          <b-timepicker> </b-timepicker>
        </b-field>
        <div class="box">
          <b-field label="Startpunkt">
            <b-input />
          </b-field>
          <b-field label="Route">
            <b-input type="textarea" />
          </b-field>
        </div>
      </b-step-item>
      <b-step-item step="4" label="Ablauf">
        <b-field label="Art und Gegenstand der Versammlung">
          <b-input />
        </b-field>
        <b-field label="Ablauf der Versammlung">
          <b-input type="textarea" />
        </b-field>
      </b-step-item>
      <b-step-item step="4" label="Details">
        <b-field label="Voraussichtliche Teilnehmer*innen">
          <b-input type="number" />
        </b-field>
        <b-field label="Anzahl Ordner*innen">
          <b-input type="number" />
        </b-field>
        <b-field
          label="Vorgesehene Hilfsmittel (Lautsprecher, Transparente,
          etc.)"
        >
          <b-input type="textarea" />
        </b-field>
      </b-step-item>
    </b-steps>
  </form>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
