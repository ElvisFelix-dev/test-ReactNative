import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
  Container,
  Title
} from './styles'


interface Props extends TouchableOpacityProps  {
  title: string;
  online: boolean
}

export function Button({
  title,
  online,
  ...rest
} : Props) {
  return (
    <Container
      online={online}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  )
}
