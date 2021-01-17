const LABEL_TEMPLATE = '<label for="$NAME">$DESCRIPTION: </label>'
const TEXT_INPUT_TEMPLATE =
  '<input class="form-control" id="$NAME" name="$NAME" type="text" placeholder="$DESCRIPTION" maxlength="500" required>'
const EMAIL_INPUT_TEMPLATE =
  '<input class="form-control" id="$NAME" name="$NAME" type="email" required>'
const TEL_INPUT_TEMPLATE =
  '<input class="form-control" id="$NAME" name="$NAME" type="tel" placeholder="$DESCRIPTION" required>'
const DATE_INPUT_TEMPLATE =
  '<input class="form-control" id="$NAME" name="$NAME" type="date" required>'
const TIME_INPUT_TEMPLATE =
  '<input class="form-control" id="$NAME" name="$NAME" type="time" required>'
const BOOL_INPUT_TEMPLATE =
  '<input class="form-control" id="$NAME" name="$NAME" type="checkbox" required>'

let counter = 0 // for unique ids and names

function parseInputTemplate(token) {
  // this function parses a single token into an <input>

  // This splits '{time : meeting_time}'
  // into ['', 'time', 'meeting_time', '']
  const splitted = token.split(/^{([^\s:]+)(?:\s*:\s*(.+))?}$/)

  // the first and last item should be empty (see example above)
  // console.assert(splitted[0] === '', 'first token of template is not empty')
  // console.assert(splitted[splitted.length - 1] === '', 'last token of template is not empty')

  let type, description
  if (splitted.length === 4) {
    // splitted = ['', TYPE, DESCRIPTION, '']
    type = splitted[1]
    description = splitted[2]
    // note: description may be `undefined` if not given
  } else {
    console.error(
      'error when parsing template token: token not parsable "' + token + '"'
    )
    return '<b class="error">FEHLER!</b>'
  }

  // we use the placeholder attribute of <input> instead of a label if possible
  let usePlaceholder = false
  let template
  switch (type) {
    case 'text':
      template = TEXT_INPUT_TEMPLATE
      usePlaceholder = true
      break
    case 'email':
      template = EMAIL_INPUT_TEMPLATE
      break
    case 'tel':
      template = TEL_INPUT_TEMPLATE
      usePlaceholder = true
      break
    case 'date':
      template = DATE_INPUT_TEMPLATE
      break
    case 'time':
      template = TIME_INPUT_TEMPLATE
      break
    case 'boolean':
      template = BOOL_INPUT_TEMPLATE
      break
    default:
      console.error(
        'error when parsing template token: unknown type "' + type + '"'
      )
      return '<b class="error">FEHLER!</b>'
  }

  const name = 'index_' + counter++
  if (description !== undefined) {
    // has description
    let input = template.replaceAll('$NAME', name)
    if (usePlaceholder) {
      input = input.replaceAll('$DESCRIPTION', description)
      return input
    } else {
      // use label instead
      const label = LABEL_TEMPLATE.replaceAll('$NAME', name).replaceAll(
        '$DESCRIPTION',
        description
      )
      return label + input
    }
  } else {
    // has no description
    const input = template
      .replaceAll('$NAME', name)
      .replaceAll('$DESCRIPTION', '')
    return input
  }
}

function parse(text) {
  // this function parses the given text and put the result into #message element

  // This splits 'Meeting at {time : meeting_time}.'
  // into ['Meeting at ', '{time : meeting_time}', '.']
  const splitted = text.split(/({[^}]*})/)

  // parse tokens and put final HTML together
  let finalHtml = ''
  splitted.forEach((token, _) => {
    if (token[0] === '{') {
      finalHtml += parseInputTemplate(token)
    } else {
      finalHtml += token
    }
  })

  // document.querySelector('#message').innerHTML = finalHtml;
  return finalHtml
}

// test
parse(
  'Am *{date : Datum} um {time : Uhrzeit} am {text : Ort}* in {text : Ortsgruppe} findet unsere nächste *Fahrrad-Demo* statt! 💚🌎\n' +
    'Diesmal fahren wir von {text} nach {text:Endpunkt} und wieder zurück. 🚴\n' +
    'Damit wollen wir *für bessere Radwege im ganzen Landkreis* demonstrieren. 🛣️🚲\n' +
    '*Wir freuen uns auf euch!* 📢🥳'
)
  .replace(/(\s~\S[^*\n]*~\s)/g, '<del>$1</del>')
  .replace(/(\s_\S[^*\n]*_\s)/g, '<em>$1</em>')
  .replace(/(\s\*\S[^*\n]*\*\s)/g, '<strong>$1</strong>')
