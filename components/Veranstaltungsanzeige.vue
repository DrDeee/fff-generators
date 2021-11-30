<template>
    <b-steps>
      <b-step-item step="1" label="Veranstalter*in" clickable>
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
      </b-step-item>
      <b-step-item step="2" label="Versammlungsleitung" clickable>
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
          <b-input v-model="versammlungsLeitungValue.nummer" />
        </b-field>
      </b-step-item>
      <b-step-item step="3" label="Zeitlicher Ablauf" clickable>
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
      <b-step-item step="4" label="Ablauf" clickable>
        <b-field label="Art und Gegenstand der Versammlung">
          <b-input v-model="versammlungsthema" />
        </b-field>
        <b-field label="Ablauf der Versammlung">
          <b-input v-model="ablauf" type="textarea" />
        </b-field>
      </b-step-item>
      <b-step-item step="5" label="Details" clickable>
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
      <b-step-item step="6" label="Download" clickable>
        <div class="content">
          Hier kannst du deine Anmeldung als PDF herunterladen. Beachte, dass du
          alle Felder ausfüllen musst, um eine vollständige Anmeldung zu
          erhalten.
        </div>
        <div class="content">
          <checklist-item
            :state="stateOfStep1"
            description="Veranstalter*in"
          ></checklist-item>
          <checklist-item
            :state="stateOfStep2"
            description="Versammlungsleitung"
          ></checklist-item>
          <checklist-item
            :state="stateOfStep3"
            description="Zeitlicher Ablauf"
          ></checklist-item>
          <checklist-item
            :state="stateOfStep4"
            description="Ablauf"
          ></checklist-item>
          <checklist-item
            :state="stateOfStep5"
            description="Details"
          ></checklist-item>
        </div>
        <b-button :type="buttonStyle" @click="createPDF">Download</b-button>
      </b-step-item>
    </b-steps>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import moment from 'moment'
import pdfMake from 'pdfmake/build/pdfmake'

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
export default class DemoanmeldungsGenerator extends Vue {
  selected = true
  date: Date[] = [new Date()]

  veranstalter = {
    name: '',
    adresszusatz: '',
    straße: '',
    PLZ: '',
    ort: '',
  }

  get stateOfStep1() {
    const nothing =
      this.veranstalter.name === '' &&
      this.veranstalter.adresszusatz === '' &&
      this.veranstalter.straße === '' &&
      this.veranstalter.PLZ === '' &&
      this.veranstalter.ort === ''
    const all =
      this.veranstalter.name !== '' &&
      this.veranstalter.adresszusatz !== '' &&
      this.veranstalter.straße !== '' &&
      this.veranstalter.PLZ !== '' &&
      this.veranstalter.ort !== ''
    return all ? '+' : nothing ? '-' : '0'
  }

  versammlungsLeitungValue = {
    name: '',
    adresszusatz: '',
    straße: '',
    PLZ: '',
    ort: '',
    nummer: '',
  }

  veranstalterIstVersammlungsleitung = true
  get versammlungsLeitung() {
    return this.veranstalterIstVersammlungsleitung
      ? { ...this.veranstalter, nummer: this.versammlungsLeitungValue.nummer }
      : this.versammlungsLeitungValue
  }

  get stateOfStep2() {
    const nothing =
      this.versammlungsLeitung.name === '' &&
      this.versammlungsLeitung.adresszusatz === '' &&
      this.versammlungsLeitung.straße === '' &&
      this.versammlungsLeitung.PLZ === '' &&
      this.versammlungsLeitung.ort === '' &&
      this.versammlungsLeitung.nummer === ''
    const all =
      this.versammlungsLeitung.name !== '' &&
      this.versammlungsLeitung.adresszusatz !== '' &&
      this.versammlungsLeitung.straße !== '' &&
      this.versammlungsLeitung.PLZ !== '' &&
      this.versammlungsLeitung.ort !== '' &&
      this.versammlungsLeitung.nummer !== ''
    return all ? '+' : nothing ? '-' : '0'
  }

  startzeit = null
  startzeitDemozug = null
  endzeit = null
  startpunkt = ''
  route = ''

  get stateOfStep3() {
    const all =
      this.startzeit != null &&
      this.startzeitDemozug != null &&
      this.endzeit != null &&
      this.startpunkt !== '' &&
      this.route !== ''
    return all ? '+' : '0'
  }

  versammlungsthema = 'Fridays For Future Laufdemo für mehr Klimagerechtigkeit'
  ablauf = ''

  get stateOfStep4() {
    return this.versammlungsthema === '' && this.ablauf === ''
      ? '-'
      : this.versammlungsthema !== '' && this.ablauf !== ''
      ? '+'
      : '0'
  }

  anzahlOrdner = ''
  voraussichtlicheTeilnehmer = ''
  vorgeseheneHilfsmittel = ''

  get stateOfStep5() {
    const nothing =
      this.anzahlOrdner === '' &&
      this.voraussichtlicheTeilnehmer === '' &&
      this.vorgeseheneHilfsmittel === ''
    const all =
      this.anzahlOrdner !== '' &&
      this.voraussichtlicheTeilnehmer !== '' &&
      this.vorgeseheneHilfsmittel !== ''
    return all ? '+' : nothing ? '-' : '0'
  }

  get isFull() {
    return (
      [
        this.stateOfStep1,
        this.stateOfStep2,
        this.stateOfStep3,
        this.stateOfStep4,
        this.stateOfStep5,
      ].filter((element) => element !== '+').length === 0
    )
  }

  get buttonStyle() {
    return this.isFull ? 'is-success' : 'is-warning'
  }

  createPDF() {
    const demonstrationDate = moment(this.date[0]).format('DD.MM.yyyy')
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
}
</script>
