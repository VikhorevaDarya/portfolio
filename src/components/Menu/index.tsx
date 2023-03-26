import { FC, useState, useCallback } from 'react'

import { DropDown, StyledMenu } from './styles'
import { Hamburger, MenuBar } from './components'

const Menu: FC = () => {
  const [isOpen, setisOpen] = useState(false)

  const handleClick = useCallback(() => {
    setisOpen(!isOpen)
  }, [isOpen])

  return (
    <StyledMenu>
      <Hamburger onClick={handleClick} isOpen={isOpen} />

      {isOpen && (
        <DropDown>
          <MenuBar />
        </DropDown>
      )}
    </StyledMenu>
  )
}

export default Menu
