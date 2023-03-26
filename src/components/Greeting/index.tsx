import { FC } from 'react'

import Avatar from '@/assets/images/main-avatar.jpg'
import {
  GreetingContainer,
  GreetingImage,
  GreetingInfo,
  GreetingTitle,
  ImageWrapper,
  GreetingSubtitle,
} from './styles'

const Greeting: FC = () => {
  return (
    <GreetingContainer>
      <GreetingInfo>
        <GreetingTitle>Hello! I'm Darya. 👋</GreetingTitle>
        <GreetingSubtitle>
          I like to create beautiful and convenient interfaces and solve
          non-trivial tasks.
        </GreetingSubtitle>
      </GreetingInfo>

      <ImageWrapper>
        <GreetingImage src={Avatar} alt={'profile'}></GreetingImage>
      </ImageWrapper>
    </GreetingContainer>
  )
}

export default Greeting
