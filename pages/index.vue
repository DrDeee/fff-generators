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
        <b-checkbox v-model="veranstalterIstVersammlungsleitung"
          >Veranstalter*in als Versammlungsleitung übernehmen</b-checkbox
        >
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
          <b-datepicker v-model="date"></b-datepicker>
        </b-field>
        <b-field label="Voraussichtlicher Start">
          <b-timepicker
            v-model="startzeit"
            :increment-minutes="5"
          ></b-timepicker>
        </b-field>
        <b-field
          label="Voraussichtlicher Start des Demozugs (wenn es keinen gibt, dann leer lassen)"
        >
          <b-timepicker
            v-model="startzeitDemozug"
            :increment-minutes="5"
          ></b-timepicker>
        </b-field>
        <b-field label="Voraussichtliches Ende">
          <b-timepicker v-model="endzeit" :increment-minutes="5"></b-timepicker>
        </b-field>
        <div class="box">
          <b-field label="Startpunkt">
            <b-input v-model="startpunkt" />
          </b-field>
          <b-field
            label="Routenverlauf (am besten alle Straßennamen nacheinander auflisten)"
          >
            <b-input v-model="route" type="textarea" />
          </b-field>
        </div>
      </b-step-item>
      <b-step-item step="4" label="Ablauf">
        <b-field label="Art und Gegenstand der Versammlung">
          <b-input v-model="versammlungsthema" />
        </b-field>
        <b-field label="Ablauf der Versammlung">
          <b-input v-model="ablauf" type="textarea" />
        </b-field>
      </b-step-item>
      <b-step-item step="5" label="Details">
        <b-field label="Voraussichtliche Teilnehmer*innen">
          <b-input
            v-model="voraussichtlicheTeilnehmer"
            type="number"
            @input="onTeilnehmerInput"
          />
        </b-field>
        <b-field>
          <template slot="label">
            <div style="display: flex">
              <b-icon
                icon="info-circle"
                type="is-info"
                custom-size="fa-lg"
                title="Meist ca. 1 Person pro 30 Teilnehmenden"
              />
              <span class="has-text-weight-bold">Anzahl Ordner*innen:</span>
            </div>
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
      <b-step-item step="6" label="Fertig">
        <b-button @click="createPDF">Download</b-button>
      </b-step-item>
    </b-steps>
    <b-button @click="createPDF">Download</b-button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import moment from 'moment'
import pdfMake from 'pdfmake/build/pdfmake'
import { DialogProgrammatic as Dialog } from 'buefy'

pdfMake.fonts = {
  jost: {
    normal: 'https://drdeee.github.io/fonts/Jost-400-Book.ttf',
    bold: 'https://drdeee.github.io/fonts/Jost-500-Medium.ttf',
    italics: 'https://drdeee.github.io/fonts/Jost-400-BookItalic.ttf',
    bolditalics: 'https://drdeee.github.io/fonts/Jost-500-MediumItalic.ttf',
  },
}

pdfMake.tableLayouts = {
  lightHorizontalLines: {
    hLineWidth(i, node) {
      if (i === 0 || i === node.table.body.length) {
        return 0
      }
      return 1
    },
    vLineWidth() {
      return 0
    },
    hLineColor() {
      return '#aaa'
    },
    paddingRight() {
      return 15
    },
    paddingTop() {
      return 2
    },
    paddingBottom() {
      return 2
    },
  },
  signature: {
    hLineWidth(i) {
      if (i === 0) {
        return 1
      }
      return 0
    },
    vLineWidth() {
      return 0
    },
    hLineColor() {
      return '#aaa'
    },
  },
}

function applyTabelStyles(table: any) {
  const ret = []
  for (let i = 0; i < table.length; i++) {
    ret.push([
      {
        text: table[i][0],
        bold: true,
      },
      table[i][1],
    ])
  }
  return ret
}
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

  startzeit = null
  startzeitDemozug = null
  endzeit = null
  startpunkt = ''
  route = ''

  versammlungsthema = 'Fridays For Future Laufdemo für mehr Klimagerechtigkeit'
  ablauf = ''

  createPDF() {
    const demonstrationDate = moment(this.date).format('DD.MM.yyyy')
    const startzeitString =
      this.startzeit !== null
        ? moment(this.startzeit).format('HH:mm') + ' Uhr'
        : ''
    const startzeitDemozugString =
      this.startzeitDemozug !== null
        ? moment(this.startzeitDemozug).format('HH:mm') + ' Uhr'
        : ''
    const endzeitString =
      this.endzeit !== null ? moment(this.endzeit).format('HH:mm') + ' Uhr' : ''

    // yes this is shit, but TS hates me.
    const docDefinition: any = {
      defaultStyle: {
        font: 'jost',
        fontSize: 12,
      },
      content: [
        {
          text:
            'Anmeldung einer Versammlung unter freiem Himmel \n nach § 14 Versammlungsgesetz',
          bold: true,
          fontSize: 18,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: `Sehr geehrte Mitarbeiter*innen der Versammlungsbehörde,
Wir würden für den ${demonstrationDate} gerne eine Demonstration anmelden.

Die benötigten Informationen für die Anmeldung der Demonstration und Kundgebung am ${demonstrationDate}:`,
          margin: [0, 0, 0, 10],
        },
        {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 0,
            widths: ['40%', '*'],
            body: applyTabelStyles([
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
                  this.versammlungsLeitung.PLZ +
                  ' ' +
                  this.versammlungsLeitung.ort,
              ],
              [
                'Telefonnummer der Versammlungsleitung',
                this.versammlungsLeitung.nummer,
              ],
              ['Start der Versammlung', startzeitString],
              ['Start des Demozugs', startzeitDemozugString],
              ['Ende der Versammlung', endzeitString],
              ['Startpunkt', this.startpunkt],
              ['Demoroute', this.route],
              ['Art und Gegenstand der Versammlung', this.versammlungsthema],
              ['Ablauf der Versammlung', this.ablauf],
              [
                'Voraussichtliche Teilnehmer*innenanzahl',
                this.voraussichtlicheTeilnehmer,
              ],
              ['Anzahl Ordner*innen', this.anzahlOrdner],
              ['Vorgesehene Hilfsmittel', this.vorgeseheneHilfsmittel],
            ]),
          },
        },
        `
Um Unklarheiten zu klären, kommen wir auch gerne vorbei.
Mit freundlichen Grüßen,

`,
        {
          layout: 'signature',
          alignment: 'center',
          margin: [300, 0, 0, 0],
          table: {
            widths: [150],
            body: [[this.veranstalter.name]],
          },
        },
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

  mounted() {
    Dialog.alert({
      title: 'Willkommen!',
      message:
        'Herzlich Willkommen bei unserem wundertollen Demoanmeldungsgenerator! ☺️<br/><br/><i>Was könnt ihr hier machen?</i><br/>Ihr könnt ganz einfach die für die Demoanmeldung nötigen Informationen hier eingeben und bekommt eine fertig formulierte Demoanmeldung generiert, die ihr gemütlich als PDF-Datei an euer Ordnungsamt schicken könnt!<br/>Achtung: Es kann sein, dass ihr je nach Situation bei euch vor Ort auch ein Hygienekonzept braucht, nutzt dafür gerne die Vorlagen der Corona Taskforce <a href="https://wiki.fridaysforfuture.is/index.php?title=Infektionsschutz#Infektionsschutzkonzepte" target="_blank">hier</a>.<br/><br/><i>Ihr bemerkt Fehler oder habt noch Fragen/Probleme?</i><br/>Dann wendet euch sehr gerne an den <a href="https://wa.me/4915678731731">Techsupport-Bot</a>!<br/><br/><i>Hinweis:</i> Dieser Generator ist offen für alle und steht zu eurer freien Verfügung, solange er nicht genutzt wird um menschenrechtsfeindliche oder faschistische Aktionen zu unterstützen.',
      confirmText: 'Cool!',
    })
  }
}
</script>
