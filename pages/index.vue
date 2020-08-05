<template>
  <form class="form">
    <b-steps>
      <b-step-item step="1" label="Veranstalter*in">
        <section class="section">
          <b-field label="Name">
            <b-input v-model="veranstalterName" />
          </b-field>
          <b-field label="Straße & Hausnummer" expanded>
            <b-input v-model="veranstalterStreet" />
          </b-field>
          <b-field label="Adresszusatz" expanded>
            <b-input v-model="veranstalterAdressZusatz" />
          </b-field>
          <b-field horizontal expanded custom-class="is-hidden">
            <b-field label="Postleitzahl" expanded>
              <b-input v-model="veranstalterPLZ" />
            </b-field>
            <b-field label="Ort" expanded>
              <b-input v-model="veranstalterOrt" />
            </b-field>
          </b-field>
        </section>
      </b-step-item>
      <b-step-item step="2" label="Versammlungsleitung">
        <b-field label="Name">
          <b-input v-model="versammlungsLeitungName" />
        </b-field>
        <b-field label="Telefonnummer/Faxnummer">
          <b-input v-model="versammlungsLeitungNummer" />
        </b-field>
        <b-field label="Straße & Hausnummer" expanded>
          <b-input v-model="versammlungsLeitungStraße" />
        </b-field>
        <b-field label="Adresszusatz" expanded>
          <b-input v-model="versammlungsLeitungAdresszusatz" />
        </b-field>
        <b-field horizontal expanded custom-class="is-hidden">
          <b-field label="Postleitzahl" expanded>
            <b-input v-model="versammlungsLeitungPLZ" />
          </b-field>
          <b-field label="Ort" expanded>
            <b-input v-model="versammlungsLeitungOrt" />
          </b-field>
        </b-field>
      </b-step-item>
      <b-step-item step="3" label="Zeitlicher Ablauf">
        <b-field label="Tag der Veranstaltung">
          <b-datepicker v-model="date"> </b-datepicker>
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
            <b-upload drag-drop accept="image/*">
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon icon="upload" size="is-large" />
                  </p>
                  <p>Lade hier ein Bild deiner Demoroute hoch</p>
                </div>
              </section>
            </b-upload>
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
    <b-button @click="createPDF">
      Download
    </b-button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import moment from 'moment'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

@Component
export default class IndexView extends Vue {
  date = new Date()
  veranstalterName = ''
  veranstalterAdressZusatz = ''
  veranstalterStreet = ''
  veranstalterPLZ = ''
  veranstalterOrt = ''

  versammlungsLeitungName = ''
  versammlungsLeitungNummer = ''
  versammlungsLeitungAdresszusatz = ''
  versammlungsLeitungStraße = ''
  versammlungsLeitungPLZ = ''
  versammlungsLeitungOrt = ''

  createPDF() {
    const demonstrationDate = moment(this.date).format('DD.MM.yyyy')
    const docDefinition = {
      content: [
        `Sehr geehrte Mitarbeiter*innen der Versammlungsbehörde,

Wir wollen für den ${demonstrationDate} eine Demo anmelden.

Die benötigten Informationen für die Anmeldung der Demonstration und Kundgebung am ${demonstrationDate}:`,
        {
          table: {
            body: [
              ['Name des*r Veranstalter*in', this.veranstalterName],
              [
                'Anschrift des*r Veranstalter*in',
                (this.veranstalterAdressZusatz
                  ? this.veranstalterAdressZusatz + '\n'
                  : '') +
                  this.veranstalterStreet +
                  '\n' +
                  this.veranstalterPLZ +
                  ' ' +
                  this.veranstalterOrt,
              ],
              ['Name der Versammlungsleitung', this.versammlungsLeitungName],
              [
                'Anschrift der Versammlungsleitung',
                (this.versammlungsLeitungAdresszusatz
                  ? this.versammlungsLeitungAdresszusatz + '\n'
                  : '') +
                  this.versammlungsLeitungStraße +
                  '\n' +
                  this.veranstalterPLZ +
                  ' ' +
                  this.versammlungsLeitungOrt,
              ],
              [
                'Telefonnummer der Versammlungsleitung',
                this.versammlungsLeitungNummer,
              ],
            ],
          },
        },
        `
Um Unklarheiten zu klären kommen wir auch gerne vorbei.

Mit freundlichen Grüßen,

${this.veranstalterName}`,
      ],
    }
    pdfMake.createPdf(docDefinition).download('demo_anmeldung.pdf')
  }
}
</script>
