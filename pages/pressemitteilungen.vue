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
              <b-datetimepicker v-model="date"></b-datetimepicker>
            </b-field>
            <b-field label="Farb-Schema">
              <div class="is-flex">
                <div
                  v-for="theme in themes"
                  :key="themes.indexOf(theme)"
                  :style="{
                    backgroundColor: theme.bgColor,
                    width: '45px',
                    height: '45px',
                    borderRadius: '5px',
                    marginRight: '5px',
                    cursor: 'pointer',
                    border:
                      '4px solid ' +
                      (currentTheme == theme ? '#7957d5' : theme.bgColor),
                  }"
                  @click="setTheme(theme)"
                ></div>
              </div>
            </b-field>
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
import { Vue, Component, Watch } from 'vue-property-decorator'
import moment from 'moment'
import pdfMake from 'pdfmake/build/pdfmake'
import { TDocumentDefinitions } from 'pdfmake/interfaces'

import { fetchLogo, themes, ColorTheme } from '../data/logo'
import fonts from '~/data/general/fonts'
import weekdays from '~/data/general/weekdays'
import logo from '~/data/general/logo'

pdfMake.fonts = fonts

@Component
export default class PressemittelungsGenerator extends Vue {
  localGroup: string = ''
  date: Date = new Date()
  currentDate = new Date()
  currentTheme: ColorTheme = themes.darkGreen
  dataUrl = ''

  logo: any = logo

  updateDataUrl() {
    pdfMake.createPdf(this.docDefinition).getDataUrl((url) => {
      this.dataUrl = url
    })
  }

  get themes() {
    return Object.values(themes)
  }

  timer: any = null

  mounted() {
    this.timer = setInterval(() => {
      this.updateDataUrl()
    }, 10000)
    this.$buefy.dialog.alert({
      title: 'Anleitung',
      message:
        'Okay, hier eine kurze Einleitung zu dem Generator<br><br/>Im ersten Schritt kannst du allgemeine Informationen über die Aktion, die du ankündigen möchtest angeben. Diese gehören zu fast allen PM dazu.<br><br/>' +
        'Im nächsten Schritt kannst du dir deine Pressemitteilung zusammenbauen. Dabei sind deine bereits eingegebenen Daten bereits in den Bausteinen eingesetzt. Die Bausteine kannst du dann nach Belieben anpassen und umordnen.<br><br/>' +
        'Im letzten Schritt kannst du deine Pressemitteilung herunterladen. Dieser Vorgang dauert <del>einige Minuten</del> keine 3 Sekunden :)',
      confirmText: 'Alles klar!',
    })
    this.loadLogo()
  }

  beforeUnmount() {
    clearInterval(this.timer)
  }

  async loadLogo() {
    this.logo = await fetchLogo(this.localGroup, this.currentTheme)
  }

  get docDefinition(): TDocumentDefinitions {
    moment.locale('de')
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
            [{ image: this.logo, width: 100, height: 100, alignment: 'right' }],
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

  logoTimer: any = null
  reloadLogo() {
    clearInterval(this.logoTimer)
    this.logoTimer = setTimeout(() => {
      this.loadLogo()
    }, 2000)
  }

  setTheme(theme: ColorTheme) {
    this.currentTheme = theme
    this.reloadLogo()
  }

  @Watch('localGroup')
  onLocalGroupChanged() {
    this.reloadLogo()
  }

  download() {
    pdfMake.createPdf(this.docDefinition).download('Pressemittelung.pdf')
  }
}
</script>
