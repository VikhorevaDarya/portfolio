import styled from 'styled-components'
import { colors, fonts } from '../../theme/variables'

export const GreetingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  width: 100%;
`

export const GreetingInfo = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 70%;
`

export const GreetingTitle = styled.h1`
  color: ${colors.$pink};
  font-size: 2.5rem;
`

export const GreetingSubtitle = styled.h2`
  color: ${colors.$pink};
  font-size: 1rem;
`

export const GreetingImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  overflow: hidden;
`
