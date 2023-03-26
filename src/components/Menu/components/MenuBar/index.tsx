import { FC } from 'react'
import { Bar, MenuItem } from './styles'

const MenuBar: FC = () => {
  return (
    <Bar>
      <MenuItem>Projects</MenuItem>
      <MenuItem>About me</MenuItem>
      <MenuItem>Contacts</MenuItem>
    </Bar>
  )
}

export default MenuBar