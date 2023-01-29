import { FC } from 'react'
import { GreetingContainer, GreetingImage, GreetingInfo, GreetingTitle } from './styles'

const Greeting: FC = () => {
  return (
    <GreetingContainer>
      <GreetingInfo>
        <GreetingTitle>Hello! I'm Darya. 👋</GreetingTitle>
      </GreetingInfo>
      <GreetingImage src={'../../assets/images/Точка входа.png'} alt={'profile'}></GreetingImage>
    </GreetingContainer>
  )
}

export default Greeting