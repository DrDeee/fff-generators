<template>
  <form class="form">
    <b-steps>
      <b-step-item step="1" label="Veranstalter*in">
        <section class="section">
          <b-field label="Vor- und Nachname">
            <b-input v-model="veranstalter.name" />
          </b-field>
          <b-field label="Straße & Hausnummer" expanded>
            <b-input v-model="veranstalter.straße" />
          </b-field>
          <b-field label="Adresszusatz" expanded>
            <b-input v-model="veranstalter.adresszusatz" />
          </b-field>
          <b-field horizontal expanded custom-class="is-hidden">
            <b-field label="Postleitzahl" expanded>
              <b-input v-model="veranstalter.PLZ" />
            </b-field>
            <b-field label="Ort" expanded>
              <b-input v-model="veranstalter.ort" />
            </b-field>
          </b-field>
        </section>
      </b-step-item>
      <b-step-item step="2" label="Versammlungsleitung">
        <b-checkbox v-model="veranstalterIstVersammlungsleitung">
          Veranstalter*in als Versammlungsleitung übernehmen
        </b-checkbox>
        <b-field label="Vor- und Nachname">
          <b-input
            v-model="versammlungsLeitung.name"
            :disabled="veranstalterIstVersammlungsleitung"
          />
        </b-field>
        <b-field label="Straße & Hausnummer" expanded>
          <b-input
            v-model="versammlungsLeitung.straße"
            :disabled="veranstalterIstVersammlungsleitung"
          />
        </b-field>
        <b-field label="Adresszusatz" expanded>
          <b-input
            v-model="versammlungsLeitung.adresszusatz"
            :disabled="veranstalterIstVersammlungsleitung"
          />
        </b-field>
        <b-field horizontal expanded custom-class="is-hidden">
          <b-field label="Postleitzahl" expanded>
            <b-input
              v-model="versammlungsLeitung.PLZ"
              :disabled="veranstalterIstVersammlungsleitung"
            />
          </b-field>
          <b-field label="Ort" expanded>
            <b-input
              v-model="versammlungsLeitung.ort"
              :disabled="veranstalterIstVersammlungsleitung"
            />
          </b-field>
        </b-field>
        <b-field label="Telefonnummer/Faxnummer">
          <b-input v-model="versammlungsLeitung.nummer" />
        </b-field>
      </b-step-item>
      <b-step-item step="3" label="Zeitlicher Ablauf">
        <b-field label="Tag der Veranstaltung">
          <b-datepicker v-model="date"> </b-datepicker>
        </b-field>
        <b-field label="Voraussichtlicher Start">
          <b-timepicker> </b-timepicker>
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
          <b-input
            value="Fridays For Future Laufdemo für mehr Klimagerechtigkeit"
          />
        </b-field>
        <b-field label="Ablauf der Versammlung">
          <b-input type="textarea" />
        </b-field>
      </b-step-item>
      <b-step-item step="4" label="Details">
        <b-field label="Voraussichtliche Teilnehmer*innen">
          <b-input
            v-model="voraussichtlicheTeilnehmer"
            type="number"
            @input="onTeilnehmerInput"
          />
        </b-field>
        <b-field>
          <template slot="label" class="has-text-weight-bold">
            <b-icon
              icon="information"
              type="is-info"
              cutom-size="mdi-18px"
              title="Meist ca. 1 Person pro 30 Teilnehmenden"
            />
            <span class="has-text-weight-bold"> Anzahl Ordner*innen: </span>
          </template>
          <b-input
            v-model="anzahlOrdner"
            type="number"
            @input="onOrdnerInput"
          />
        </b-field>
        <b-field
          label="Vorgesehene Hilfsmittel (Lautsprecher, Transparente,
          etc.)"
        >
          <b-input v-model="vorgeseheneHilfsmittel" type="textarea" />
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
  date = new Date('2020-09-25')

  veranstalter = {
    name: '',
    adresszusatz: '',
    straße: '',
    PLZ: '',
    ort: '',
  }

  versammlungsLeitungValue = {
    name: '',
    adresszusatz: '',
    straße: '',
    PLZ: '',
    ort: '',
    nummer: '',
  }

  anzahlOrdner = ''

  voraussichtlicheTeilnehmer = ''

  vorgeseheneHilfsmittel = ''

  veranstalterIstVersammlungsleitung = true
  get versammlungsLeitung() {
    return this.veranstalterIstVersammlungsleitung
      ? { ...this.veranstalter, nummer: this.versammlungsLeitungValue.nummer }
      : this.versammlungsLeitungValue
  }

  createPDF() {
    const demonstrationDate = moment(this.date).format('DD.MM.yyyy')
    // yes this is shit, but TS hates me.
    const docDefinition: any = {
      content: [
        {
          text: `Sehr geehrte Mitarbeiter*innen der Versammlungsbehörde,

Wir wollen für den ${demonstrationDate} eine Demo anmelden.

Die benötigten Informationen für die Anmeldung der Demonstration und Kundgebung am ${demonstrationDate}:`,
          margin: [0, 0, 0, 10],
        },
        {
          table: {
            body: [
              ['Name des*r Veranstalter*in', this.veranstalter.name],
              [
                'Anschrift des*r Veranstalter*in',
                (this.veranstalter.adresszusatz
                  ? this.veranstalter.adresszusatz + '\n'
                  : '') +
                  this.veranstalter.straße +
                  '\n' +
                  this.veranstalter.PLZ +
                  ' ' +
                  this.veranstalter.ort,
              ],
              ['Name der Versammlungsleitung', this.versammlungsLeitung.name],
              [
                'Anschrift der Versammlungsleitung',
                (this.versammlungsLeitung.adresszusatz
                  ? this.versammlungsLeitung.adresszusatz + '\n'
                  : '') +
                  this.versammlungsLeitung.straße +
                  '\n' +
                  this.veranstalter.PLZ +
                  ' ' +
                  this.versammlungsLeitung.ort,
              ],
              [
                'Telefonnummer der Versammlungsleitung',
                this.versammlungsLeitung.nummer,
              ],
              [
                'Voraussichtliche Teilnehmer*innenanzahl',
                this.voraussichtlicheTeilnehmer,
              ],
              ['Anzahl Ordner*innen', this.anzahlOrdner],
              ['Vorgesehene Hilfsmittel', this.vorgeseheneHilfsmittel],
            ],
          },
        },
        `
Um Unklarheiten zu klären kommen wir auch gerne vorbei.

Mit freundlichen Grüßen,

${this.veranstalter.name}`,
      ],
    }
    pdfMake.createPdf(docDefinition).download('demo_anmeldung.pdf')
  }

  manuallySetOrdner = false

  onOrdnerInput() {
    this.manuallySetOrdner = true
  }

  onTeilnehmerInput() {
    const teilnehmer = Number(this.voraussichtlicheTeilnehmer)
    if (teilnehmer && !this.manuallySetOrdner) {
      this.anzahlOrdner = Math.ceil(teilnehmer / 30).toString()
    }
  }
}
</script>
