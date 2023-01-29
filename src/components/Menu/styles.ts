import styled from 'styled-components'
import { colors } from '@/theme/variables'

export const StyledMenu = styled.div`
`
export const DropDown = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.$pink};
`