import { useState } from 'react'
import { Greeting } from './components/Greeting'
import { BaseLayout } from './components/BaseLayout'
import { Menu } from './components/Menu'
import GlobalStyles from './theme/globals'
import GlobalFonts from './theme/fonts'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <Menu />
      <BaseLayout>
        <Greeting />
      </BaseLayout>
    </>
  )
}

export default App
