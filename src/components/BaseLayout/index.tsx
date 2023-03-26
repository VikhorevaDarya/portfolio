import { FC } from 'react'
import { Layout } from './styles'

interface Props {
  children: React.ReactNode;
}

const BaseLayout: FC<Props> = ({ children }) => {
  return <Layout>{ children }</Layout>
}

export default BaseLayout