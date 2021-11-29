export enum SMTemplateTypes {
    FahrradDemo = "Fahrraddemo",
    Streik = "Streik",
    GlobalerStreik = "Globaler Klimastreik",
    Plenum = "Plenum/Onboarding",
    ErinnerungGlobalerStreik = "Erinnerung Globaler Klimastreik",
    ErinnerungStreik = "Erinnerung Klimastreik"
}

export interface Template {
    content: string
    type: SMTemplateTypes
}