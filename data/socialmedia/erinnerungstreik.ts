import { SMTemplateFlags, SMTemplateTypes, Template } from "./templates";

const erinnerungStreikTemplates: Template[] = [
    {
        content: `<b>In <%= days %> Tagen gilt's!</b> Wir treffen uns um <b><%= time %></b> am <b><%= location %></b> 
um zu zeigen wie wichtig uns unser
Planet und unsere Zukunft ist!🌍💪`,
        type: SMTemplateTypes.ErinngerungStreik,
        flags: [SMTemplateFlags.Days]
    }, {
        content: `<b>In <%= days %> Tagen ist es soweit!</b> Unsere nächste Demo findet statt! 🌍🎉Beginn ist um <%= time %> am
<%= Location %> in <%= localgroup %> 🕑! <b>Wir freuen uns drauf!</b>`,
        type: SMTemplateTypes.ErinngerungStreik,
        flags: [SMTemplateFlags.Days]
    },
    {
        content: `Also Leute, <b>in <%= days %> Tagen wird es ernst:</b><br><br>
Unsere FFF-Demo startet <b>diesen Freitag um <%= time %> am <%= location %></b>. Wir freuen uns auf euch!!!🥳📢`,
        type: SMTemplateTypes.ErinngerungStreik,
        flags: [SMTemplateFlags.Days]
    },
    {
        content: `<b>In <%= days %> Tagen ist es soweit!</b><br>
Wir streiken für den #NeustartKlima!<br><br>
🌍 <b>Wann und wo?</b><br><br>
<%= localgroup %>, <%= time %> <%= location %><br>
Laut für's Klima! 📢<br>
➡bringt alles mit, dass Lärm macht!🔊<br><br>
<b>Wir freuen uns euch morgen zu sehen!</b>👀👌🌍`,
        type: SMTemplateTypes.ErinngerungStreik,
        flags: [SMTemplateFlags.Days]
    }
]

export default erinnerungStreikTemplates