import { createGlobalStyle } from 'styled-components'

import PragmaticaBlackWoff from '@/assets/fonts/Pragmatica/Pragmatica-Black.woff'
import PragmaticaBlackWoff2 from '@/assets/fonts/Pragmatica/Pragmatica-Black.woff2'
import PragmaticaBoldWoff from '@/assets/fonts/Pragmatica/Pragmatica-Bold.woff'
import PragmaticaBoldWoff2 from '@/assets/fonts/Pragmatica/Pragmatica-Bold.woff2'
import PragmaticaBookWoff from '@/assets/fonts/Pragmatica/Pragmatica-Book.woff'
import PragmaticaBookWoff2 from '@/assets/fonts/Pragmatica/Pragmatica-Book.woff2'
import PragmaticaExtraBoldWoff from '@/assets/fonts/Pragmatica/Pragmatica-ExtraBold.woff'
import PragmaticaExtraBoldWoff2 from '@/assets/fonts/Pragmatica/Pragmatica-ExtraBold.woff2'
import PragmaticaExtraLightWoff from '@/assets/fonts/Pragmatica/Pragmatica-ExtraLight.woff'
import PragmaticaExtraLightWoff2 from '@/assets/fonts/Pragmatica/Pragmatica-ExtraLight.woff2'
import PragmaticaLightWoff from '@/assets/fonts/Pragmatica/Pragmatica-Light.woff'
import PragmaticaLightWoff2 from '@/assets/fonts/Pragmatica/Pragmatica-Light.woff2'
import PragmaticaMediumWoff from '@/assets/fonts/Pragmatica/Pragmatica-Medium.woff'
import PragmaticaMediumWoff2 from '@/assets/fonts/Pragmatica/Pragmatica-Medium.woff2'
import PragmaticaExtendedBlackWoff from '@/assets/fonts/Pragmatica/PragmaticaExtended-Black.woff'
import PragmaticaExtendedBlackWoff2 from '@/assets/fonts/Pragmatica/PragmaticaExtended-Black.woff2'
import PragmaticaExtendedBoldWoff from '@/assets/fonts/Pragmatica/PragmaticaExtended-Bold.woff'
import PragmaticaExtendedBoldWoff2 from '@/assets/fonts/Pragmatica/PragmaticaExtended-Bold.woff2'
import PragmaticaExtendedBookWoff from '@/assets/fonts/Pragmatica/PragmaticaExtended-Book.woff'
import PragmaticaExtendedBookWoff2 from '@/assets/fonts/Pragmatica/PragmaticaExtended-Book.woff2'
import PragmaticaExtendedExtraBoldWoff from '@/assets/fonts/Pragmatica/PragmaticaExtended-ExtraBold.woff'
import PragmaticaExtendedExtraBoldWoff2 from '@/assets/fonts/Pragmatica/PragmaticaExtended-ExtraBold.woff2'
import PragmaticaExtendedExtraLightkWoff from '@/assets/fonts/Pragmatica/PragmaticaExtended-ExtraLight.woff'
import PragmaticaExtendedExtraLightWoff2 from '@/assets/fonts/Pragmatica/PragmaticaExtended-ExtraLight.woff2'
import PragmaticaExtendedLightWoff from '@/assets/fonts/Pragmatica/PragmaticaExtended-Light.woff'
import PragmaticaExtendedLightWoff2 from '@/assets/fonts/Pragmatica/PragmaticaExtended-Light.woff2'
import PragmaticaExtendedMediumWoff from '@/assets/fonts/Pragmatica/PragmaticaExtended-Medium.woff'
import PragmaticaExtendedMediumWoff2 from '@/assets/fonts/Pragmatica/PragmaticaExtended-Medium.woff2'

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Pragmatica';
    src: local('Pragmatica ExtraLight'), local('Pragmatica-ExtraLight'),
        url(${PragmaticaExtraLightWoff2}) format('woff2'),
        url(${PragmaticaExtraLightWoff}) format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica';
    src: local('Pragmatica Light'), local('Pragmatica-Light'),
        url(${PragmaticaLightWoff2}) format('woff2'),
        url(${PragmaticaLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica';
    src: local('Pragmatica Book'), local('Pragmatica-Book'),
        url(${PragmaticaBookWoff2}) format('woff2'),
        url(${PragmaticaBookWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica';
    src: local('Pragmatica Medium'), local('Pragmatica-Medium'),
        url(${PragmaticaMediumWoff2}) format('woff2'),
        url(${PragmaticaMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica';
    src: local('Pragmatica Bold'), local('Pragmatica-Bold'),
        url(${PragmaticaBoldWoff2}) format('woff2'),
        url(${PragmaticaBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica';
    src: local('Pragmatica ExtraBold'), local('Pragmatica-ExtraBold'),
        url(${PragmaticaExtraBoldWoff2}) format('woff2'),
        url(${PragmaticaExtraBoldWoff}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica';
    src: local('Pragmatica Black'), local('Pragmatica-Black'),
        url(${PragmaticaBlackWoff2}) format('woff2'),
        url(${PragmaticaBlackWoff}) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica Extended';
    src: local('Pragmatica Extended ExtraLight'), local('PragmaticaExtended-ExtraLight'),
        url(${PragmaticaExtendedExtraLightWoff2}) format('woff2'),
        url(${PragmaticaExtendedExtraLightkWoff}) format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica Extended';
    src: local('Pragmatica Extended Light'), local('PragmaticaExtended-Light'),
        url(${PragmaticaExtendedLightWoff2}) format('woff2'),
        url(${PragmaticaExtendedLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica Extended';
    src: local('Pragmatica Extended Book'), local('PragmaticaExtended-Book'),
        url(${PragmaticaExtendedBookWoff2}) format('woff2'),
        url(${PragmaticaExtendedBookWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica Extended';
    src: local('Pragmatica Extended Medium'), local('PragmaticaExtended-Medium'),
        url(${PragmaticaExtendedMediumWoff2}) format('woff2'),
        url(${PragmaticaExtendedMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica Extended';
    src: local('Pragmatica Extended Bold'), local('PragmaticaExtended-Bold'),
        url(${PragmaticaExtendedBoldWoff2}) format('woff2'),
        url(${PragmaticaExtendedBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica Extended';
    src: local('Pragmatica Extended ExtraBold'), local('PragmaticaExtended-ExtraBold'),
        url(${PragmaticaExtendedExtraBoldWoff2}) format('woff2'),
        url(${PragmaticaExtendedExtraBoldWoff}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pragmatica Extended';
    src: local('Pragmatica Extended Black'), local('PragmaticaExtended-Black'),
        url(${PragmaticaExtendedBlackWoff2}) format('woff2'),
        url(${PragmaticaExtendedBlackWoff}) format('woff');
    font-weight: 900;
    font-style: normal;
  }
`

export default GlobalFonts