import { SMTemplateTypes, Template } from "./types";

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
    },
    {
        content: `In <b><%= days %> Tagen</b> ist Globaler Klimastreik!🌍🗓<br><br>
Wir gehen weltweit für Klimagerechtigkeit und eine Verkehrs- und Energiewende auf die Straße.📢⚖️🚊<br>br>
-> <%= time %> <%= location %> (Laufdemo) 📢<br><br>
Wir freuen uns auf euch! Bitte denkt an eine <b>Maske</b> und haltet <b>Abstand</b>!😷`,
        type: SMTemplateTypes.ErinnerungGlobalerStreik,
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
        
    }, {
        content: `<b>+++Noch <%= days %> Tage+++</b><br>
Wir gehen wieder auf die Straße! 📢💚🌎<br>
Wir fordern die <b>Begrenzung der globalen Erwärmung auf maximal 1,5°C!</b><br>
Nur so ist es möglich, die <b>Folgen des Klimawandels für Natur und Umwelt zu
minimieren.</b>🌳<br>
Dafür brauchen wir eine Verkehrs- und Energiewende!🚉🌦<br><br>
<%= localgroup %>: Lauf-Demo um <%= time %> am <%= location %> 📢`,
        type: SMTemplateTypes.ErinnerungGlobalerStreik,
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
    }
]

export default erinnerungGlobalerStreikTemplates