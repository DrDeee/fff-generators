import { SMTemplateFlags, SMTemplateTypes, Template } from "./templates";

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

export default fahradDemoTemplates