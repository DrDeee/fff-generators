<template>
  <b-steps>
    <b-step-item step="1" label="Allgemeine Infos" clickable> </b-step-item>
    <b-step-item step="2" label="Aktion" clickable>Hi </b-step-item>
    <b-step-item step="3" label="Zitate" clickable>Hi </b-step-item>
    <template #navigation>
      <navigation />
    </template>
  </b-steps>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { TDocumentDefinitions } from 'pdfmake/interfaces'
// import fonts from '~/data/general/fonts'

// pdfMake.fonts = fonts

pdfMake.vfs = pdfFonts.pdfMake.vfs

@Component
export default class PressemittelungsGenerator extends Vue {
  generate() {
    const docDefinition: TDocumentDefinitions = {
      defaultStyle: {
        // font: 'jost',
        fontSize: 11,
      },
      footer: [
        {
          text: 'Pressemitteilung',
          fontSize: 10,
          alignment: 'center',
        },
        {
          text: 'Fridays for Future Pirna           ',
          fontSize: 10,
          alignment: 'center',
        },
      ],
      content: [
        {
          text: 'Pressemitteilung',
          bold: true,
          fontSize: 17,
          margin: [0, 33, 0, 0],
        },
        {
          text: 'Fridays for Future Pirna',
          bold: true,
        },
        {
          text:
            'Dienstag, 21. September 2021\n\n „Wir streiken, bis ihr handelt“ – Klimastreik in Pirna\nSchüler:innen streiken in Pirna fürs Klima',
          noWrap: false,
          linkToPage: 2,
          bold: true,
          margin: [0, 60, 0, 0],
        },
        {
          text: 'Test',
          noWrap: true,
        },
      ],
    }
    pdfMake.createPdf(docDefinition).open()
  }
}
</script>
