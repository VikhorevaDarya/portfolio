import { FC, useState } from 'react'
import { DropDown, StyledMenu } from './styles'
import { Hamburger } from './components'

const Menu: FC = () => {
  const [isOpen, setisOpen] = useState(false)

  const handleClick = () => {
    setisOpen(!isOpen)
  }

  return (
    <StyledMenu>
      <Hamburger onClick={handleClick} isOpen={isOpen} />
      {isOpen && <DropDown />}
    </StyledMenu>
  )
}

export default Menu