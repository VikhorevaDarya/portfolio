import { FC } from 'react'
import { HamburgerMenu, HamburgerItem } from './styles'

interface Props {
  onClick(): void
  isOpen: boolean
}

const Hamburger: FC<Props> = ({ onClick, isOpen }) => {
  return (
    <HamburgerMenu onClick={onClick}>
      <HamburgerItem active={isOpen} />
    </HamburgerMenu>
  )
}

export default Hamburger