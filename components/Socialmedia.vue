<template>
  <b-steps v-model="step">
    <b-step-item step="1" label="Typ">
      <b-field>
        <b-select v-model="type" expanded>
          <option v-for="t of types" :key="types.indexOf(t)">{{ t }}</option>
        </b-select>
      </b-field>
    </b-step-item>
    <b-step-item step="2" label="Infos">
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Infos</p>
            </header>
            <div class="card-content">
              <b-field label="Ortsgruppe">
                <b-input v-model="og" />
              </b-field>
              <b-field label="Ort">
                <b-input v-model="location" />
              </b-field>
              <b-field label="Start">
                <b-timepicker
                  v-model="time"
                  icon="clock"
                  :increment-minutes="5"
                ></b-timepicker>
              </b-field>
              <b-field v-if="type === 'Fahrraddemo'" label="Startpunkt">
                <b-input v-model="start"></b-input
              ></b-field>
              <b-field v-if="type === 'Fahrraddemo'" label="Endpunkt"
                ><b-input v-model="end"></b-input
              ></b-field>
              <b-field label="Datum">
                <b-datepicker
                  v-model="date"
                  placeholder="Wähle das Datum.."
                  icon="calendar-week"
                >
                </b-datepicker>
              </b-field>
            </div>
          </div>
        </div>
        <div class="column second">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Vorschau</p>
            </header>
            <div class="card-content">
              <b-message v-if="finishedTemplates.length == 0" type="is-info">
                Du musst einige Informationen angeben, damit dir mögliche
                Nachrichten angezeigt werden können. Du musst nicht unbedingt
                alle auszufüllen, sobald du genügend ausgefüllt hast werden dir
                Möglichkeiten angezeigt.
              </b-message>
              <section>
                <div
                  v-for="template of finishedTemplates"
                  :key="template.id"
                  class="box"
                  @click="selectTemplate(template.id)"
                  v-html="template.content"
                ></div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </b-step-item>
    <b-step-item step="3" label="Fertig">
      <b-message v-if="selectedTemplate == -1" type="is-warning"
        >Du musst erst ein Template auswählen und die Infos angeben!</b-message
      >
      <div v-else>
        <div class="box" v-html="template"></div>
        <b-field label="Kopieren für">
          <div class="buttons">
            <b-button expanded type="is-primary" @click="copyPlain()"
              >Instagram</b-button
            >
            <b-button expanded type="is-primary" @click="copyWhatsApp()"
              >WhatsApp</b-button
            >
            <b-button expanded type="is-primary" @click="copyMarkdown()"
              >Matrix & Discord</b-button
            >
          </div>
        </b-field>
      </div>
    </b-step-item>
  </b-steps>
</template>

<style scoped>
.box {
  cursor: pointer;
}
.second {
  max-height: 70vh;
  overflow: auto;
}
</style>

<script lang="ts">

// TODO formatting for Instagram
//      SharePics?

import { Vue, Component } from 'vue-property-decorator'
import moment from 'moment'
import { NodeHtmlMarkdown } from 'node-html-markdown'
import { SnackbarProgrammatic as Snackbar } from 'buefy'

import templates, {
  SMTemplateFlags,
  SMTemplateTypes,
} from '~/data/socialmedia/templates'

const converter = new NodeHtmlMarkdown()
const converterWA = new NodeHtmlMarkdown({
  strongDelimiter: '*',
})
const converterPlain = new NodeHtmlMarkdown({
  strongDelimiter: '',
  emDelimiter: '',
})

@Component
export default class SocialmediaGenerator extends Vue {
  type = SMTemplateTypes.Streik
  types = [SMTemplateTypes.FahrradDemo, SMTemplateTypes.Streik]

  og = ''
  date: Date | null = null
  location = ''

  time: Date | null = null

  start = ''
  stop = 'null'

  step = 0
  selectedTemplate = -1

  get month() {
    return this.date == null ? null : moment(this.date).format('MMMM')
  }

  get templateData() {
    return {
      date: moment(this.date).format('D.MM.'),
      localgroup: this.og,
      location: this.location,
      time: moment(this.time).format('H:mm'),
      start: this.start,
      end: this.stop,
      month: this.month,
    }
  }

  get finishedTemplates() {
    return templates
      .filter((template) => {
        let check =
          this.start !== null &&
          this.og !== '' &&
          this.location !== '' &&
          this.time !== null
        template.flags.forEach((flag) => {
          switch (flag) {
            case SMTemplateFlags.Date: {
              if (this.date == null) check = false
              break
            }
            case SMTemplateFlags.Start: {
              if (this.start === '') check = false
              break
            }
            case SMTemplateFlags.End: {
              if (this.stop === '') check = false
              break
            }
          }
        })
        return template.types.includes(this.type) && check
      })
      .map((template) => {
        return {
          id: templates.indexOf(template),
          content: window.ejs.render(template.content, this.templateData),
        }
      })
  }

  get template() {
    return window.ejs.render(
      templates[this.selectedTemplate].content,
      this.templateData
    )
  }

  selectTemplate(id: number) {
    this.selectedTemplate = id
    this.step = 2
  }

  copyWhatsApp() {
    window.navigator.clipboard.writeText(converterWA.translate(this.template))
    Snackbar.open('Nachricht kopiert.')
  }

  copyMarkdown() {
    window.navigator.clipboard.writeText(converter.translate(this.template))
    Snackbar.open('Nachricht kopiert.')
  }

  copyPlain() {
    window.navigator.clipboard.writeText(
      converterPlain
        .translate(this.template)
    )
    Snackbar.open('Nachricht kopiert.')
  }
}
</script>
