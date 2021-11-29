import erinnerungGlobalerStreikTemplates from "./erinnerungglobalerstreik";
import erinnerungStreikTemplates from "./erinnerungstreik";
import fahradDemoTemplates from "./fahrraddemo";
import globalerStreikTemplates from "./globalerstreik";
import plenumTemplates from "./plenum";
import streikTemplates from "./streik";

import { Template } from "./types";

const templates: Template[] = [
    ...streikTemplates,
    ...plenumTemplates,
    ...globalerStreikTemplates,
    ...fahradDemoTemplates,
    ...erinnerungStreikTemplates,
    ...erinnerungGlobalerStreikTemplates
]

export default templates;