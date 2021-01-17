// Formatting Whatsapp is different from Markdown!
// To bold a message: *whatsapp* vs. **markdown**

// Adapted from https://gist.github.com/nathan-cruz77/6e43ac375103de597edf52e07abfcbff
// (for an alternative see https://github.com/sankalp179/whatsapp-formatter/blob/master/index.html)

function whatsToHtml(msg) {
  // this function formats *bold*, _italic_ and ~strikethrough~ and keeps the formatting symbols
  if (!msg) return

  return msg
    .replace(/(\s~\S[^*\n]*~\s)/g, '<del>$1</del>')
    .replace(/(\s_\S[^*\n]*_\s)/g, '<em>$1</em>')
    .replace(/(\s\*\S[^*\n]*\*\s)/g, '<strong>$1</strong>')
}

whatsToHtml('foo') // bypass prettier
