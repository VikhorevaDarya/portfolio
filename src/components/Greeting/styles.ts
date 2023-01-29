import styled from 'styled-components'
import { colors, fonts } from '../../theme/variables'

export const GreetingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const GreetingInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const GreetingTitle = styled.h1`
  color: ${colors.$pink};
  font-size: 2.5rem;
`

export const GreetingImage = styled.img``