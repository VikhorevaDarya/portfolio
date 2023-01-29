const colors = {
  $white: '#ffffff',
  $pink: '#E96269',
}

const fontFamily = {
  $pragmatica: 'Pragmatica',
  $pragmaticaExtended: 'Pragmatica Extended',
}

const fontWeight = {
  normal: 'normal',
  bold: 'bold',
  '200': '200',
  '300': '300',
  '500': '500',
  '800': '800',
  '900': '900',
}

const fonts = {
  $pragmaticaExtraLight: `
    font-family: ${fontFamily.$pragmatica};
    font-weight: ${fontWeight['200']};
  `,
  $pragmaticaLight: `
    font-family: ${fontFamily.$pragmatica};
    font-weight: ${fontWeight['300']};
  `,
  $pragmaticaBook: `
    font-family: ${fontFamily.$pragmatica};
    font-weight: ${fontWeight.normal};
  `,
  $pragmaticaMedium: `
    font-family: ${fontFamily.$pragmatica};
    font-weight: ${fontWeight['500']};
  `,
  $pragmaticaBold: `
    font-family: ${fontFamily.$pragmatica};
    font-weight: ${fontWeight.bold};
  `,
  $pragmaticaExtraBold: `
    font-family: ${fontFamily.$pragmatica};
    font-weight: ${fontWeight['800']};
  `,
  $pragmaticaBlack: `
    font-family: ${fontFamily.$pragmatica};
    font-weight: ${fontWeight['900']};
  `,
  $pragmaticaExtendedExtraLight: `
    font-family: ${fontFamily.$pragmaticaExtended};
    font-weight: ${fontWeight['200']};
  `,
  $pragmaticaExtendedLight: `
    font-family: ${fontFamily.$pragmaticaExtended};
    fonts-weight: ${fontWeight['300']};
  `,
  $pragmaticaExtendedBook: `
    font-family: ${fontFamily.$pragmaticaExtended};
    font-weight: ${fontWeight.normal};
  `,
  $pragmaticaExtendedMedium: `
    font-family: ${fontFamily.$pragmaticaExtended};
    font-weight: ${fontWeight['500']};
  `,
  $pragmaticaExtendedBold: `
    font-family: ${fontFamily.$pragmaticaExtended};
    font-weight: ${fontWeight.bold};
  `,
  $pragmaticaExtendedExtraBold: `
    font-family: ${fontFamily.$pragmaticaExtended};
    font-weight: ${fontWeight['800']};
  `,
  $pragmaticaExtendedBlack: `
    font-family: ${fontFamily.$pragmaticaExtended};
    font-weight: ${fontWeight['900']};
  `,
}

export { colors, fontFamily, fonts, fontWeight }
