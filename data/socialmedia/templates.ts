export enum SMTemplateTypes {
    FahrradDemo = "Fahrraddemo",
    Streik = "Streik"
}

export enum SMTemplateFlags {
    Date,
    Start,
    End
}

interface Template {
    content: string
    types: SMTemplateTypes[],
    flags: SMTemplateFlags[]
}

const templates: Template[] = [
    {
        content: `Am <b><%= date %> um <%= time %> am <%= location %></b> in <%= localgroup %> 
findet unsere nächste <b>Fahrrad-Demo</b> statt! 💚🌎<br>
Diesmal fahren wir von <%= start %> nach <%= stop %> und wieder zurück. 🚴<br>
Damit wollen wir für bessere Radwege im ganzen Landkreis demonstrieren. 🛣️🚲<br>
 <b>Wir freuen uns auf euch!</b> 📢🥳`,
        types: [SMTemplateTypes.FahrradDemo],
        flags: [SMTemplateFlags.Start, SMTemplateFlags.End, SMTemplateFlags.Date]
    },
    {
        content: `<b>Heute</b> um <b><%= time %></b> beginnt unsere <b>Fahrrad-Demo</b>
 am <b><%= location %></b> in <%= localgroup %>! 💚🚲<br>
Bitte denkt bei der Hitze an <b>Sonnencreme, Kopfbedeckung und genügend Wasser.</b> ☀️⛱️<br>
<b>Wir freuen uns auf euch!</b> 🌎🌳`,
        types: [SMTemplateTypes.FahrradDemo],
        flags: []
    },
    {
        content: `<b><%= date %>: Wieder aufs Fahrrad!</b><br><br>
Am Freitag den <%= date %> veranstalten wir noch eine Aktion: Eine Fahrraddemo!🥳🌎🚲<br><br>
        
Zum Einen läuft die Verkehrswende in <%= localgroup %> immernoch schleppend, zum anderen ist 
die aktuelle Politik generell nicht mit den Pariser Klimazielen vereinbar, deshalb gehen wir 
am <%= date %> wieder auf die Straße und fordern weiterhin eine ausreichende Klimapolitik!🌎🚲<br><br>
        
Unsere Fahrraddemo startet um <%= time %> am Ort. See you on the streets!🚲🌎🥳📣`,
        types: [SMTemplateTypes.FahrradDemo],
        flags: [SMTemplateFlags.Date]
    },
    {
        content: `<b>🚴🏾‍♀️Wir machen bald eine FAHRRAD-DEMO🚴🏽‍♂️</b><br><br>
<b>❓Wann❓</b><br>
<%= date %> um <%= time %><br><br>
        
<b>❓Wo❓</b><br>
Los geht's am <%= location %> 🚉<br><br>

<b>❓Warum❓</b><br>
Wir fordern eine richtige Verkehrswende und bessere Infrastruktur für ÖPNV und Radverkehr 🚲<br><br>

<b>See you on the streets!</b>
        `,
        types: [SMTemplateTypes.FahrradDemo],
        flags: [SMTemplateFlags.Date]
    },
    {
        content: `<b>Nächste Demo am <%= date %></b> 💚🌍<br>
Wir sind noch hier und wir sind nicht bereit aufzugeben!<br>
Daher treffen wir uns natürlich auch im <%= month %> wieder zum gemeinsamen Klimastreik und zeigen den Politiker:innen, 
dass sie uns nicht ignorieren können!<br><br>

📍📆 Treffpunkt ist am <b><%= date %></b> um <b><%= time %></b> am <b><%= location %></b><br><br>
 
Bringt alle eure Freund:innen und Kolleg:innen, Schilder und Banner mit und macht euch gemeinsam mit uns für unsere Erde und unser Klima stark! 💪🏻<br>
Gemeinsam sind wir unaufhaltsam! 💚`,
        types: [SMTemplateTypes.Streik],
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
        types: [SMTemplateTypes.Streik],
        flags: [SMTemplateFlags.Date]
    },
    {
        content: `Hallo Leute,<br>
am <%= date %> ist es endlich soweit, <b>wir demonstrieren wieder</b> in <%= localgroup %>!!!🥳✊🏽<br><br>

Wir starten um <b><%= time %> am <%= location %> in <%= localgroup %></b>, bringt alle eure Freunde und Verwandten mit, damit unsere Demo richtig <b>FETT</b> wird!!!<br><br>

Habt viel Spaß, bringt Schilder und Transparente mit und <b>schreit so laut ihr könnt um ein Zeichen für den globalen Klimaschutz zu setzen!</b>🎤🌍`,
        types: [SMTemplateTypes.Streik],
        flags: [SMTemplateFlags.Date]
    },
    {
        content: `Am <b>Freitag den <%= date %> um <%= time %> am <%= location %> in <%= localgroup %></b> findet unsere nächste Demo statt!💪<br>
<b>Wir sind hier, wir sind laut, weil ihr uns die Zukunft klaut!</b>🌎<br>
Kommt zahlreich!✌🌎`,
        types: [SMTemplateTypes.Streik],
        flags: [SMTemplateFlags.Date]
    }
]

export default templates