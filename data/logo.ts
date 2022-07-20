import axios from 'axios'

export interface ColorTheme {
  bgColor: string
  descriptionColor: string
  descriptionBgColor: string
  earthColor: string
  innerBorderColor: string
  ogColor: string
  tradeColor: string
}

export const themes: { [key: string]: ColorTheme } = {
  darkGreen: {
    bgColor: '#1B7340',
    descriptionBgColor: '#111',
    descriptionColor: '#fff',
    earthColor: '#90D3ED',
    innerBorderColor: '#90D3ED',
    ogColor: '#fff',
    tradeColor: '#fff',
  },
  lightGreen: {
    bgColor: '#1DA64A',
    descriptionBgColor: '#111',
    descriptionColor: '#fff',
    earthColor: '#fff',
    innerBorderColor: '#fff',
    ogColor: '#fff',
    tradeColor: '#fff',
  },
  neonGreen: {
    bgColor: '#3dcc9f',
    descriptionBgColor: '#FF005C',
    descriptionColor: '#fff',
    earthColor: '#fff',
    innerBorderColor: '#fff',
    ogColor: '#fff',
    tradeColor: '#fff',
  },
  pink: {
    bgColor: '#FF005C',
    descriptionBgColor: '#3dcc9f',
    descriptionColor: '#fff',
    earthColor: '#fff',
    innerBorderColor: '#fff',
    ogColor: '#fff',
    tradeColor: '#fff',
  },
  purple: {
    bgColor: '#20175A',
    descriptionBgColor: '#7D93F8',
    descriptionColor: '#fff',
    earthColor: '#fff',
    innerBorderColor: '#fff',
    ogColor: '#fff',
    tradeColor: '#fff',
  },
}
export async function fetchLogo(groupName: string, colorTheme: ColorTheme) {
  const logo = (
    await axios.post<ArrayBuffer>(
      'https://toolpic.org:8080/render',
      {
        root: 'https://toolpic.org/cdn/toolpic/templates_precompiled/Logo/LogoNew.vue.js',
        assets: 'https://toolpic.org/cdn/toolpic/templates_precompiled/Logo',
        width: 1080,
        height: 1080,
        format: 'png',
        type: 'image',
        data: {
          og: groupName,
          label: '',
          theme: colorTheme,
          pos: 0,
        },
      },
      {
        responseType: 'arraybuffer',
      }
    )
  ).data
  return `data:image/png;base64,${Buffer.from(logo).toString('base64')}`
}
