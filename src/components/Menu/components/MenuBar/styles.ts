import styled from 'styled-components'
import { colors, transition } from '@/theme/variables'

export const Bar = styled.div`
  position: absolute;
  top: 40%;
  right: 43%;
`
export const MenuItem = styled.h2`
  color: ${colors.$white};
  font-size: 2rem;

  cursor: pointer;

  &:hover {
    color: ${colors.$darkPink};
    transition: color ${transition};
  }
`
