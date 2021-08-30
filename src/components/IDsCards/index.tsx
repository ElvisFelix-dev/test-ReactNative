import React from 'react'

import {
  Container,
  ContainerID,
  IDService,
  IDSubTitle,
  IDTitle,
  IDTime
} from './styles'

export function IDsCards() {
  return (
    <Container>
      <IDService>
       <ContainerID>
        <IDTitle>Pacote ID: XXXXX</IDTitle>
        <IDSubTitle>Pendente sincronizar</IDSubTitle>
       </ContainerID>
       <IDTime>11:30</IDTime>
      </IDService>
    </Container>
  )
}
