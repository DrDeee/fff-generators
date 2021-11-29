<template>
  <div>
    <div
      class="is-size-4 has-text-centered is-uppercase has-text-weight-bold pb-3"
    >
      Pressemitteilungen
    </div>
    <div class="columns">
      <div class="column">
        <b-steps destroy-on-hide>
          <b-step-item step="1" label="Allgemeine Infos" clickable>
            <b-field label="Ortsgruppe">
              <b-input v-model="localGroup"></b-input>
            </b-field>
            <b-field label="Datum & Uhrzeit">
              <b-datetimepicker v-model="date"></b-datetimepicker
            ></b-field>
          </b-step-item>
          <b-step-item step="2" label="Aktion" clickable> </b-step-item>
          <template #navigation>
            <navigation />
          </template>
        </b-steps>
      </div>
      <div class="column">
        <preview :refresh="updateDataUrl" :data-url="dataUrl" />
        <b-field class="tools" grouped>
          <div class="control">
            <b-button
              expanded
              type="is-primary"
              icon-left="download"
              @click="download()"
              >Download</b-button
            >
          </div>
          <div class="control">
            <b-button
              expanded
              icon-left="sync"
              type="is-primary"
              @click="updateDataUrl()"
              >Update</b-button
            >
          </div>
        </b-field>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tools {
  justify-content: center;
}
</style>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import moment from 'moment'
import pdfMake from 'pdfmake/build/pdfmake'
import { TDocumentDefinitions } from 'pdfmake/interfaces'

import fonts from '~/data/general/fonts'
import weekdays from '~/data/general/weekdays'
import logo from '~/data/general/logo'

pdfMake.fonts = fonts


@Component
export default class PressemittelungsGenerator extends Vue {
  localGroup: string = ''
  date: Date = new Date()
  currentDate = new Date()
  dataUrl = ''

  updateDataUrl() {
    pdfMake.createPdf(this.docDefinition).getDataUrl((url) => {
      this.dataUrl = url
    })
  }

  get docDefinition(): TDocumentDefinitions {
    return {
      defaultStyle: {
        font: 'jost',
        fontSize: 11,
        lineHeight: 0.8,
      },
      pageMargins: [70, 50],
      footer: [
        {
          text: 'Pressemitteilung',
          fontSize: 10,
          alignment: 'center',
        },
        {
          text: 'Fridays for Future ' + this.localGroup,
          fontSize: 10,
          alignment: 'center',
        },
      ],
      content: [
        {
          columns: [
            [
              {
                text: 'Pressemitteilung',
                bold: true,
                fontSize: 17,
                margin: [0, 27, 0, 0],
              },
              {
                text: 'Fridays for Future ' + this.localGroup,
                bold: true,
              },
            ],
            [{ image: logo, width: 100, height: 100, alignment: 'right' }],
          ],
        },
        {
          text:
            weekdays[this.currentDate.getDay()] +
            moment(this.currentDate).format(', DD. MMMM YYYY') +
            '\n\n „Wir streiken, bis ihr handelt“ – Klimastreik in Pirna\nSchüler:innen streiken in ' +
            this.localGroup +
            ' fürs Klima',
          noWrap: false,
          linkToPage: 2,
          bold: true,
          margin: [0, 35, 0, 0],
        },
        {
          text: 'Test',
          noWrap: true,
        },
      ],
    }
  }

  download() {
    pdfMake.createPdf(this.docDefinition).download('Pressemittelung.pdf')
  }
}
</script>
