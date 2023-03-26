import { Greeting, BaseLayout, Menu } from './components'

import GlobalStyles from './theme/globals'
import GlobalFonts from './theme/fonts'

function App() {
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
