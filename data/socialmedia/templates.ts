import streikTemplates from "./streik"
import fahradDemoTemplates from "./fahrraddemo"
import plenumTemplates from "./plenum"
import globalerStreikTemplates from "./globalerstreik"
import erinnerungStreikTemplates from "./erinnerungstreik"
import erinnerungGlobalerStreikTemplates from "./erinnerungglobalerstreik"


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



const templates: Template[] = [...streikTemplates,
...fahradDemoTemplates,
...plenumTemplates,
...globalerStreikTemplates,
...erinnerungStreikTemplates,
...erinnerungGlobalerStreikTemplates]
export default templates