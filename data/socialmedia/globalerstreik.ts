import { SMTemplateTypes, Template } from "./types";

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
        
    }
]

export default globalerStreikTemplates