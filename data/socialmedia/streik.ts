import { SMTemplateFlags, SMTemplateTypes, Template } from "./templates";

const streikTemplates: Template[] = [    {
    content: `<b>Nächste Demo am <%= date %></b> 💚🌍<br>
Wir sind noch hier und wir sind nicht bereit aufzugeben!<br>
Daher treffen wir uns natürlich auch im <%= month %> wieder zum gemeinsamen Klimastreik und zeigen den Politiker:innen, 
dass sie uns nicht ignorieren können!<br><br>

📍📆 Treffpunkt ist am <b><%= date %></b> um <b><%= time %></b> am <b><%= location %></b><br><br>

Bringt alle eure Freund:innen und Kolleg:innen, Schilder und Banner mit und macht euch gemeinsam mit uns für unsere Erde und unser Klima stark! 💪🏻<br>
Gemeinsam sind wir unaufhaltsam! 💚`,
    type: SMTemplateTypes.Streik,
    flags: [SMTemplateFlags.Date]
},
{
    content: `<b>💚 Am <%= date %>  ist unsere nächste Fridays for Future Demo!</b><br><br> 🌏

<b>❓ Wann? ❓</b><br>
<%= time %>.🕓<br><br>


<b>❓ Wo? ❓</b><br>
Startpunkt ist der <%= location %>.<br><br>


<b>❓ Warum? ❓</b><br>
Es geht um Klimagerechtigkeit, sowie die Verkehrs- und Energiewende! 🌍<br><br>

<b>Demonstriert mit uns und bringt noch eure Freund:innen und Verwandten mit!</b> 🌱📢`,
    type: SMTemplateTypes.Streik,
    flags: [SMTemplateFlags.Date]
},
{
    content: `Hallo Leute,<br>
am <%= date %> ist es endlich soweit, <b>wir demonstrieren wieder</b> in <%= localgroup %>!!!🥳✊🏽<br><br>

Wir starten um <b><%= time %> am <%= location %> in <%= localgroup %></b>, bringt alle eure Freunde und Verwandten mit, damit unsere Demo richtig <b>FETT</b> wird!!!<br><br>

Habt viel Spaß, bringt Schilder und Transparente mit und <b>schreit so laut ihr könnt um ein Zeichen für den globalen Klimaschutz zu setzen!</b>🎤🌍`,
    type: SMTemplateTypes.Streik,
    flags: [SMTemplateFlags.Date]
},
{
    content: `Am <b>Freitag den <%= date %> um <%= time %> am <%= location %> in <%= localgroup %></b> findet unsere nächste Demo statt!💪<br>
<b>Wir sind hier, wir sind laut, weil ihr uns die Zukunft klaut!</b>🌎<br>
Kommt zahlreich!✌🌎`,
    type: SMTemplateTypes.Streik,
    flags: [SMTemplateFlags.Date]
}]

export default streikTemplates