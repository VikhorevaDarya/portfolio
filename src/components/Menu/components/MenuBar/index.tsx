import { FC } from 'react'

import { Bar, MenuItem } from './styles'
import { menuItems } from './config'

const MenuBar: FC = () => {
  return (
    <Bar>
      {menuItems.map((item) => (
        <MenuItem key={item.id}>{item.title}</MenuItem>
      ))}
    </Bar>
  )
}

export default MenuBar
