import { SMTemplateTypes, Template } from './types'

const plenumTemplates: Template[] = [
  {
    content: `📆<b>Onboarding - Aktiv werden bei Fridays for Future</b>📆<br><br>
Ihr habt Lust aktiv bei Fridays for Future <%= localgroup %> zu werden? Ihr wollte Aktionen planen,
mit Politiker*innen diskutieren und Demos veranstalten? 🗣💬<br>
Dann kommt auf jeden Fall zu <b>unserem Online-Onboarding am <%= day %>, den <%= date %> um
<%= time %>!</b><br>
Wir möchten diese offene TK (Telefonkonferenz) nutzen um uns gegenseitig
kennenzulernen, unsere bisherige Arbeitsweise vorzustellen und mit euch gemeinsam
herauszufinden, auf welche Art und Weise ihr Lust habt aktiv zu werden und wie wir in
Zukunft zusammen etwas bewegen können! 💚🌍<br>
Wenn ihr Interesse habt, dann meldet euch gerne bei <%= contactlink %> für die
Zugangsdaten.<br><br>
Wir freuen uns auf euch! 🥳`,
    type: SMTemplateTypes.Plenum,
  },
  {
    content: `Hallo ihr Lieben Klimaaktivistis 🌱<br>
<b>Am <%= date %> um <%= time %> haben wir Plenum.</b> 🗣<br>
Dieses wird wieder Online stattfinden, schreib <%= contactlink %> einfach an, dann
schicke ich Dir den Link zu.<br>
<b>Falls du dich gerne bei Fridaysforfuture in Ortsgruppe mit einbringen möchtest,
komm vorbei!</b>`,
    type: SMTemplateTypes.Plenum,
  },
  {
    content: `<b>ONLINE PLENUM</b><br><br>
Liebe Aktivistis!💙🌍<br>
Unser nächstes Plenum steht an und findet wieder online statt! 🥳<br><br>
<b>Wann?</b> 🕑<br>
Am <%= day %>, den <%= date %>. um <%= time %><br><br>
<b>Wie?</b> 🖥📱<br>
Wenn ihr teilnehmen wollt erhalten ihr weitere Informationen und den Zugangslink gerne per
PN bei einem Admin.<br><br>
<b>Wer?</b> 👀👥<br>
Alle die Lust und Interesse haben sind wie immer herzlich eingeladen💚<br><br>
Wir freuen uns auf euch!🙌`,
    type: SMTemplateTypes.Plenum,
  },
  {
    content: `<b>Onlineplenum am <%= day %></b><br><br>
Liebe Aktivistis 💚,<br>
unser nächstes Online-Plenum steht an! 🥳<br><br>
🕒 <b>Wann?</b><br>
<%= day %>, <%= date %> um <%= time %><br><br>
🐣 <b>Wer?</b><br>
Alle sind natürlich wie immer herzlich eingeladen! 💚<br><br>
🙈 <b>Wie geht das?</b><br>
Wenn ihr Lust habt am Plenum teilzunehmen, meldet euch einfach bei <%= contactlink %>,
wir senden euch dann die Informationen, mit welchen ihr am <%= day %> einfach
mitmachen könnt.<br>
Solltet ihr Fragen zur Plattform haben, könnt ihr diese in dem Zusammenhang natürlich auch
gerne stellen.<br><br>
Wir freuen uns auf das Plenum mit Euch! 🙌`,
    type: SMTemplateTypes.Plenum,
  },
]

export default plenumTemplates
