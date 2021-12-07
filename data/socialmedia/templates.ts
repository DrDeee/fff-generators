export enum SMTemplateTypes {
    FahrradDemo = "Fahrraddemo",
    Streik = "Streik",
    GlobalerStreik = "Globaler Klimastreik",
    Plenum = "Plenum/Onboarding",
    ErinnerungGlobalerStreik = "Erinnerung Globaler Klimastreik",
    ErinngerungStreik = "Erinngerung Klimastreik"
}


export enum SMTemplateFlags {
    Date,
    Start,
    End,
    ContactLink,
    Day,
    Program,
    Days
}

export interface Template {
    content: string
    type: SMTemplateTypes,
    flags: SMTemplateFlags[]
}

const streikTemplates: Template[] = [{
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
        flags: [SMTemplateFlags.Date, SMTemplateFlags.ContactLink, SMTemplateFlags.Day]
    },
    {
        content: `Hallo ihr Lieben Klimaaktivistis 🌱<br>
<b>Am <%= date %> um <%= time %> haben wir Plenum.</b> 🗣<br>
Dieses wird wieder Online stattfinden, schreib <%= contactlink %> einfach an, dann
schicke ich Dir den Link zu.<br>
<b>Falls du dich gerne bei Fridaysforfuture in Ortsgruppe mit einbringen möchtest,
komm vorbei!</b>`,
        type: SMTemplateTypes.Plenum,
        flags: [SMTemplateFlags.Date, SMTemplateFlags.ContactLink]
    }, {
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
        flags: [SMTemplateFlags.Day, SMTemplateFlags.Date]
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
        flags: [SMTemplateFlags.Date, SMTemplateFlags.Day, SMTemplateFlags.ContactLink]
    }
]

const globalerStreikTemplates: Template[] = [
    {
        content: `<b>Globaler Klimastreik</b><br>
Am <%= date %> findet nach langer Pause endlich wieder ein <b>globaler Klimastreik</b> von
FridaysforFuture gegen die verfehlte Klimapolitik statt! 💚🥳🌎<br><br>
🗺 <b>Wo?</b><br>
<%= location %>
🕛 <b>Wann?</b><br>
<%= day %> | <%= time %><br><br>
🗣 <b>Wer?</b><br>
Alle! Bringt all Eure Freunde mit!<br><br>
🌍 <b>Warum?</b><br>
Weil die Klimakrise keine Pause macht, auch nicht in Zeiten von Covid19! Und ohne uns
diese Krise scheinbar wieder komplett von der Tagesordnung verschwindet. 😡<br><br>
📢 <b>Was?</b><br>
<%= program %> - alles coronakonform, denn neben der Notwendigkeit, für richtige
Klimagerechtigkeit einzustehen, dürfen wir diese zweite Krise natürlich nicht vergessen.<br><br>
😷 Bitte denkt an euren <b>Mund-Nasen-Schutz</b> und haltet auf der Kundgebung sowie dem
Demozug die <b>Abstände</b> ein, damit wir das Infektionsrisiko für Covid19 so gering wie möglich
halten können!<br><br>
Wir freuen uns auf euch!! 💚`,
        type: SMTemplateTypes.GlobalerStreik,
        flags: [SMTemplateFlags.Program, SMTemplateFlags.Date]
    },
    {
        content: `<b>Weltweiter Klimastreik und Klimaaktionen am GLOBAL DAY OF CLIMATE ACTION</b> 🌍💪🗣<br><br>
        <b><%= date %> | <%= time %> | <%= location %></b><br><br>
        Am <%= date %> findet ein <b>GLOBAL DAY OF CLIMATE ACTION</b> statt. Nach der enttäuschenden
        Klimapolitik der letzten Jahren werden wir weltweit mit verschiedensten Aktionen lautstark
        climate justice und konsequenten Klimaschutz fordern! 🗣💪🌍🌳<br><br>

        Wir als FFF <%= localgroup %> sind natürlich auch dabei und treffen uns um Uhrzeit auf dem Ort,
        um für unsere Zukunft einzustehen.<br>
        <b>Wir freuen uns auf viele motivierte bekannte und neue Gesichter!</b> 💚`,
        type: SMTemplateTypes.GlobalerStreik,
        flags: [SMTemplateFlags.Date]
    },
    {
        content: `Du kannst es nicht erwarten wieder für unsere Zukunft auf die Straßen zu gehen?<br>
Perfekt!<br>
Da haben wir was für dich, am <b><%= date %></b> ist der nächste <b>globale Klimastreik</b> 🌎<br><br>
Auch in <%= localgroup %> wollen wir wieder mit euch für eine klimagerechte Zukunft auf die
Straßen ziehen.🥳<br>
Die Demo startet um <b><%= time %> am <%= location %>.</b><br>
Pack dieses Mal nicht nur deine Freund*innen und ein Demoschild ein, sondern auch
Masken, da auf unseren Kundgebungen sowie der Demo selbstverständlich eine <b>Abstands-</b> sowie <b>Maskenpflicht</b> gilt.🦠<br>
Solltest du Symptome wie Fieber, trockenen Husten oder starke Müdigkeit aufweisen, bitten
dich solidarisch zu handeln, und anstatt zur Demo zu gehen die Coronahotline zu
kontaktieren. 🤒➡️📞<br><br>
Aber bis dahin, bleib gesund,<br>
Wir freuen uns auf dich!💚`,
        type: SMTemplateTypes.GlobalerStreik,
        flags: [SMTemplateFlags.Date]
    },
    {
        content: `<b>WICHTIGE INFO</b><br><br>
<b>Globaler Klimastreik</b><br>
<b>Wann?</b> 📆 <%= date %> | <%= time %> 🕛<br>
<b>Wo?</b> 🗺 <%= location %> | <%= localgroup %><br>
<b>Wer?</b> 👤 Menschen aller Altersgruppen aus ganz Deutschland, die mit der aktuellen
Klimapolitik unzufrieden sind!<br><br>
Nach einer Ewigkeit voller Schulstreiks und anderer Aktionen, wurden leider immer noch keine
ausreichenden Maßnahmen zur Einhaltung des 1,5°C- Ziels getroffen! Deswegen wollen wir am
Datum in Ortsgruppe ein besonderes Zeichen setzen.<br>
<b>Wir organisieren dazu eine Großdemo</b> 💚<br>
Wir starten um <b><%= time %></b> am <b><%= location %></b> und nach einem Demozug durch Ortsgruppe versammeln
wir uns wieder dort und es gibt ein tolles Bühnenprogramm mit Redner*innen und Musikacts. 🤗<br><br>
<b>Wir freuen uns auf Euch!</b> 💚💪🌍🌏🌎`,
        type: SMTemplateTypes.GlobalerStreik,
        flags: [SMTemplateFlags.Date]
    },
    {
        content: `Am <b><%= date %></b> ist der nächste <b>Internationale Klimastreiktag!</b> In <b><%= localgroup %></b> geht es um
<b><%= time %></b> am <b><%= location %></b> los! 🌎💚🥳<br><br>
Wir wollen den <b>Klimawandel</b> gemeinsam mit euch am <%= date %> <b>wieder global zum Thema
machen.</b><br>
Während der Veranstaltung achten wir natürlich auch auf den <b>Infektionsschutz</b>, da wir jede
Krise ernst nehmen. 😷<br><br>
💚 <b>Wir freuen uns auf euch!</b> 💚`,
        type: SMTemplateTypes.GlobalerStreik,
        flags: [SMTemplateFlags.Date]
    }
]

const fahradDemoTemplates: Template[] = [{
    content: `Am <b><%= date %> um <%= time %> am <%= location %></b> in <%= localgroup %> 
findet unsere nächste <b>Fahrrad-Demo</b> statt! 💚🌎<br>
Diesmal fahren wir von <%= start %> nach <%= stop %> und wieder zurück. 🚴<br>
Damit wollen wir für bessere Radwege im ganzen Landkreis demonstrieren. 🛣️🚲<br>
<b>Wir freuen uns auf euch!</b> 📢🥳`,
    type: SMTemplateTypes.FahrradDemo,
    flags: [SMTemplateFlags.Start, SMTemplateFlags.End, SMTemplateFlags.Date]
},
{
    content: `<b>Heute</b> um <b><%= time %></b> beginnt unsere <b>Fahrrad-Demo</b>
am <b><%= location %></b> in <%= localgroup %>! 💚🚲<br>
Bitte denkt bei der Hitze an <b>Sonnencreme, Kopfbedeckung und genügend Wasser.</b> ☀️⛱️<br>
<b>Wir freuen uns auf euch!</b> 🌎🌳`,
    type: SMTemplateTypes.FahrradDemo,
    flags: []
},
{
    content: `<b><%= date %>: Wieder aufs Fahrrad!</b><br><br>
Am Freitag den <%= date %> veranstalten wir noch eine Aktion: Eine Fahrraddemo!🥳🌎🚲<br><br>
    
Zum Einen läuft die Verkehrswende in <%= localgroup %> immernoch schleppend, zum anderen ist 
die aktuelle Politik generell nicht mit den Pariser Klimazielen vereinbar, deshalb gehen wir 
am <%= date %> wieder auf die Straße und fordern weiterhin eine ausreichende Klimapolitik!🌎🚲<br><br>
    
Unsere Fahrraddemo startet um <%= time %> am Ort. See you on the streets!🚲🌎🥳📣`,
    type: SMTemplateTypes.FahrradDemo,
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
    type: SMTemplateTypes.FahrradDemo,
    flags: [SMTemplateFlags.Date]
}]

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

const erinnerungGlobalerStreikTemplates: Template[] = [
    {
        content: `‼️<b>TEILEN TEILEN TEILEN</b> ‼️<br>
Bis zum globalen Klimastreik sind es nur noch <%= days %> Tage - daher brauchen wir Eure
Hilfe, nochmal ordentlich die Werbetrommel 🥁 zu wirbeln und möglichst viele
Schüler*innen, Eltern, Großeltern, Freund*innen, Student*innen usw. daran zu erinnern,
dass es wieder losgeht und wir wieder deutschlandweit und weltweit laut werden für mehr
Klimaschutz - die Klimakrise wird weiterhin nicht adäquat bekämpft, daher werden wir wieder
laut und ziehen die Notbremse.<br><br>
<b>Kommt am Freitag zur Demo - macht die Klimakrise wieder zum Thema - mobilisiert
ganz viele Freund*innen, mit Euch zu kommen!</b> 🎊🥳🙌🗣�`,
        type: SMTemplateTypes.ErinnerungGlobalerStreik,
        flags: [SMTemplateFlags.Days]
    },
    {
        content: `In <b><%= days %> Tagen</b> ist Globaler Klimastreik!🌍🗓<br><br>
Wir gehen weltweit für Klimagerechtigkeit und eine Verkehrs- und Energiewende auf die Straße.📢⚖️🚊<br>br>
-> <%= time %> <%= location %> (Laufdemo) 📢<br><br>
Wir freuen uns auf euch! Bitte denkt an eine <b>Maske</b> und haltet <b>Abstand</b>!😷`,
        type: SMTemplateTypes.ErinnerungGlobalerStreik,
        flags: [SMTemplateFlags.Days]
    },
    {
        content: `<b>Große Demonstration in Corona-Zeiten</b>⁉️<br>
<b>Ist das nicht verantwortungslos</b> ❓<br><br>
Nein! Denn wir werden genauestens auf die <b>Einhaltung des Mindestabstands</b> von 1,5
Metern sowie das <b>Tragen von Mund-Nasen-Bedeckungen</b> achten. 😷⬅️➡️😷<br>
Wir sind schließlich <b>keine Verschwörungs-Ideolog:innen</b> oder <b>Corona-Leugner:innen</b>.<br>
Darum kommt am <%= day %> zu unserer Demo am <b><%= location %></b> um <b><%= time %></b> und verhaltet euch vernünftig.<br><br>
Wir müssen der Bundesregierung gerade in dieser Krise zeigen, dass jede Krise
ernstzunehmen ist! 📢`,
        type: SMTemplateTypes.ErinnerungGlobalerStreik,
        flags: [SMTemplateFlags.Date]
    }, {
        content: `<b>+++Noch <%= days %> Tage+++</b><br>
Wir gehen wieder auf die Straße! 📢💚🌎<br>
Wir fordern die <b>Begrenzung der globalen Erwärmung auf maximal 1,5°C!</b><br>
Nur so ist es möglich, die <b>Folgen des Klimawandels für Natur und Umwelt zu
minimieren.</b>🌳<br>
Dafür brauchen wir eine Verkehrs- und Energiewende!🚉🌦<br><br>
<%= localgroup %>: Lauf-Demo um <%= time %> am <%= location %> 📢`,
        type: SMTemplateTypes.ErinnerungGlobalerStreik,
        flags: [SMTemplateFlags.Days]
    }, {
        content: `<b>+++ NOCH <%= days %> Tage...+++</b><br>
🌎....Dann ist unser nächster globaler Klimastreik.<br>
Überall auf der Welt werden wir an diesem Tag auf die Straße gehen um für gerechte
Klimapolitik zu demonstrieren.<br>
#keingradweiter<br><br>
🗓 <b>Was ihr jetzt schon tun könnt:</b><br>
-> den <%= date %> in den Kalender eintragen<br>
-> euer Schild bemalen<br><br>
<b>....💡 und damit der <%= date %> groß wird:</b><br>
-> Plakate aufhängen<br>
-> Sticker verteilen<br>
-> Euren Freunden und Bekannten Bescheid sagen! ...<br><br>
✊ Seid dabei und streikt mit uns - Und teilt die Streikdaten mit dem Hashtag
#keingradweiter in euren Storys!<br>
Und vergesst nicht uns zu markieren!<br><br>
<b><%= time %></b> | <b><%= location %></b> 📢🌎`,
        type: SMTemplateTypes.ErinnerungGlobalerStreik,
        flags: [SMTemplateFlags.Days, SMTemplateFlags.Date]
    }
]

const templates: Template[] = [
    ...streikTemplates,
    ...plenumTemplates,
    ...globalerStreikTemplates,
    ...fahradDemoTemplates,
    ...erinnerungStreikTemplates,
    ...erinnerungGlobalerStreikTemplates
]

export default templates;