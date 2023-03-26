import { createGlobalStyle } from 'styled-components'

import { fonts } from './variables'

const GlobalStyles = createGlobalStyle`
  html{
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
    font-size: 62.5%;
    overflow-x: hidden;
  }
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow-y: auto;
    font-size: 0.5rem;
    align-items: stretch;
    overflow-y: hidden;
    ${fonts.$pragmaticaBook};
    background-color: #FFFFFF;
    * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }
    * {
      scrollbar-width: thin;
      scrollbar-color: #E8E8E8 #FFFFFF;
    }

    #root {
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyles
