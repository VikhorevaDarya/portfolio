import { useState } from 'react'

import { Greeting, BaseLayout, Menu } from './components'

import GlobalStyles from './theme/globals'
import GlobalFonts from './theme/fonts'

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
