<template>
  <div>
    <div
      class="is-size-4 has-text-centered is-uppercase has-text-weight-bold pb-3"
    >
      Social Media-Nachrichten
    </div>
    <b-steps v-model="step">
      <b-step-item step="1" label="Infos">
        <div class="columns">
          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Infos</p>
              </header>
              <div class="card-content">
                <div class="title is-size-7 has-text-weight-light">
                  Du musst nicht unbedingt alle Felder ausfüllen. Einige
                  Vorlagen benötigen mehr Infos als andere. Gebe einfach die
                  Infos an, die du hast, und alle möglichen Vorgaben werden dir
                  angezeigt werden.
                </div>
                <b-field label="Aktionsform">
                  <b-select v-model="type" expanded>
                    <option v-for="t of types" :key="types.indexOf(t)">
                      {{ t }}
                    </option>
                  </b-select>
                </b-field>
                <b-field
                  v-if="
                    type === 'Erinnerung Globaler Klimastreik' ||
                    type === 'Erinnerung Klimastreik'
                  "
                  label="Verbleibende Tage"
                >
                  <b-numberinput v-model="days" :min="2" />
                </b-field>
                <b-field label="Ortsgruppe">
                  <b-input v-model="og" placeholder="Pirna" />
                </b-field>
                <b-field label="Ort">
                  <b-input v-model="location" placeholder="Friedenspark" />
                </b-field>
                <b-field label="Datum">
                  <b-datepicker
                    v-model="date"
                    placeholder="Wähle das Datum.."
                    icon="calendar-week"
                  >
                  </b-datepicker>
                </b-field>
                <b-field label="Start">
                  <b-timepicker
                    v-model="time"
                    icon="clock"
                    :default-minutes="0"
                    :increment-minutes="5"
                  ></b-timepicker>
                </b-field>
                <b-field label="Kontaktlink">
                  <b-input
                    v-model="link"
                    placeholder="https://wa.me/491521.."
                  />
                </b-field>
                <b-field v-if="type === 'Fahrraddemo'" label="Startpunkt">
                  <b-input
                    v-model="start"
                    placeholder="Donaischer Platz"
                  ></b-input
                ></b-field>
                <b-field v-if="type === 'Fahrraddemo'"
                  ><b-input
                    v-model="end"
                    label="Endpunkt"
                    placeholder="Bahnhof"
                  ></b-input
                ></b-field>
                <b-field label="Programm"
                  ><b-input
                    v-model="program"
                    type="textarea"
                    :placeholder="'- Start um 14 Uhr\n- Zug durch...'"
                  ></b-input
                ></b-field>
              </div>
            </div>
          </div>
          <div class="column second">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Vorschau</p>
              </header>
              <div class="card-content">
                <b-message
                  v-if="finishedTemplates.length == 0"
                  type="is-info"
                  closable
                >
                  Du musst einige Informationen angeben, damit dir mögliche
                  Nachrichten angezeigt werden können. Du musst nicht unbedingt
                  alle auszufüllen, sobald du genügend ausgefüllt hast werden
                  dir Möglichkeiten angezeigt.
                </b-message>
                <b-message v-if="finishedTemplates.length != 0">
                  Du hast selber eine Nachricht, die du anderen OGs anbieten
                  möchtest? Oder du hast keine passende Nachricht gefunden, und
                  dir selber eine geschrieben?<br /><br />
                  <em
                    >Sende diese doch bitte an

                    <a href="https://ffftre.es/elias" target="_blank"
                      >Elias</a
                    >, damit diese hier eingefügt werden kann!</em
                  >
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
      <b-step-item step="2" label="Fertig">
        <b-message v-if="template === ''" type="is-warning"
          >Du musst erst ein Template auswählen und die Infos
          angeben!</b-message
        >
        <div v-else>
          <div class="box">
            <div v-if="!editing" v-html="template" />
            <quill-editor
              v-else
              v-model="template"
              :options="{
                theme: 'bubble',
                modules: {
                  toolbar: ['bold', 'italic', 'underline'],
                },
              }"
            />
            <div class="has-text-right">
              <b-button
                :icon-left="editing ? 'check' : 'edit'"
                @click="editing = !editing"
              ></b-button>
            </div>
          </div>
          <b-field label="Kopieren für">
            <div class="columns is-multiline is-centered is-variable is-1">
              <div class="buttons column is-half">
                <b-button
                  type="is-primary"
                  icon-pack="fab"
                  icon-left="instagram"
                  expanded
                  @click="copyInstagram()"
                  >Instagram</b-button
                >
                <b-button
                  type="is-primary"
                  icon-pack="fab"
                  icon-left="whatsapp"
                  expanded
                  @click="copyWhatsApp()"
                  >WhatsApp</b-button
                >
                <b-button
                  type="is-primary"
                  icon-left="lock"
                  expanded
                  @click="copyMarkdown()"
                  >Matrix</b-button
                >
              </div>
              <div class="buttons column is-half">
                <b-button
                  type="is-primary"
                  icon-pack="fab"
                  icon-left="discord"
                  expanded
                  @click="copyMarkdown()"
                  >Discord</b-button
                >
                <b-button
                  type="is-primary"
                  icon-pack="fab"
                  icon-left="telegram"
                  expanded
                  @click="copyTelegram()"
                  >Telegram</b-button
                >
                <b-button
                  type="is-primary"
                  icon-left="code"
                  expanded
                  @click="copyHtml()"
                  >HTML</b-button
                >
              </div>
              <div class="buttons column is-half">
                <b-button
                  type="is-primary"
                  icon-left="file-alt"
                  expanded
                  @click="copyText()"
                  >Keine Formatierungen</b-button
                >
              </div>
            </div>
          </b-field>
        </div>
      </b-step-item>
      <template #navigation>
        <navigation />
      </template>
    </b-steps>
  </div>
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

import { SMTemplateTypes } from '~/data/socialmedia/types'
import templates from '~/data/socialmedia/templates'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import weekdays from '~/data/general/weekdays'

const { quillEditor } = require('quill-vuejs')

const converter = new NodeHtmlMarkdown()
const converterWA = new NodeHtmlMarkdown({
  strongDelimiter: '*',
})
const converterPlain = new NodeHtmlMarkdown({
  strongDelimiter: '³³³³³³³³³',
  emDelimiter: '€€€€€€€€€',
})

const converterTG = new NodeHtmlMarkdown({
  emDelimiter: '__',
})

@Component({
  components: {
    quillEditor,
  },
})
export default class SocialmediaGenerator extends Vue {
  type = SMTemplateTypes.Streik
  types = [
    SMTemplateTypes.FahrradDemo,
    SMTemplateTypes.Streik,
    SMTemplateTypes.GlobalerStreik,
    SMTemplateTypes.ErinnerungStreik,
    SMTemplateTypes.ErinnerungGlobalerStreik,
    SMTemplateTypes.Plenum,
  ]

  templates = templates

  og = ''
  date: Date | null = null
  location = ''

  time: Date | null = null

  start = ''
  end = ''
  stop = 'null'

  days = 2

  link = ''

  program = ''

  step = 0

  get month() {
    return this.date == null ? null : moment(this.date).format('MMMM')
  }

  get templateData() {
    const data: any = {
      date: this.date == null ? undefined : moment(this.date).format('D.MM.'),
      localgroup: this.og === '' ? undefined : this.og,
      location: this.location === '' ? undefined : this.location,
      time: this.time == null ? undefined : moment(this.time).format('H:mm'),
      start: this.start === '' ? undefined : this.start,
      end: this.stop === '' ? undefined : this.stop,
      month: this.month == null ? undefined : this.month,
      days: this.days,
      program: this.program === '' ? undefined : this.program,
      contactlink: this.link === '' ? undefined : this.link,
      day: this.date == null ? undefined : weekdays[this.date.getDay()]
    }
    for (const key in data) {
      if (data[key] === undefined || data[key] == null) {
        delete data[key]
      }
    }
    return data
  }

  get finishedTemplates() {
    return templates
      .filter((template) => {
        return template.type === this.type
      })

      .map((template) => {
        let msg = null
        try {
          msg = window.ejs.render(template.content, this.templateData)
        } catch (e) {
          return {
            id: templates.indexOf(template),
          }
        }
        return {
          id: templates.indexOf(template),
          content: msg,
        }
      })
      .filter((data) => data.content != null)
  }

  editing = false
  template: string = ''

  selectTemplate(id: number) {
    this.template = window.ejs.render(templates[id].content, this.templateData)
    this.step = 1
  }

  copyWhatsApp() {
    window.navigator.clipboard.writeText(converterWA.translate(this.template))
    Snackbar.open('Nachricht kopiert.')
  }

  copyMarkdown() {
    window.navigator.clipboard.writeText(converter.translate(this.template))
    Snackbar.open('Nachricht kopiert.')
  }

  copyTelegram() {
    window.navigator.clipboard.writeText(converterTG.translate(this.template))
    Snackbar.open('Nachricht kopiert.')
  }

  copyInstagram() {
    let s: string = ''
    converterPlain
      .translate(this.template)
      .split('\n')
      .forEach((line: string) => {
        s += line.trim() === '' ? '.\n' : line.trim() + '\n'
      })

    window.navigator.clipboard.writeText(
      s.replaceAll('€€€€€€€€€', '').replaceAll('³³³³³³³³³', '')
    )
    Snackbar.open('Nachricht kopiert.')
  }

  copyHtml() {
    window.navigator.clipboard.writeText(this.template)
    Snackbar.open('Nachricht kopiert.')
  }

  copyText() {
    window.navigator.clipboard.writeText(
      converterPlain
        .translate(this.template)
        .replaceAll('€€€€€€€€€', '')
        .replaceAll('³³³³³³³³³', '')
    )
    Snackbar.open('Nachricht kopiert.')
  }
}
</script>
