import React from 'react'

import { IDsCards } from '../../components/IDsCards'

import {
  Container,
  Header,
  Title,
  ButtonBack,
  TitleButton,
  HeaderTitle,
  Separator,
  ListID,
  SynchronizeID
} from './styles'

export default function Status({ navigation }) {
  return(
    <Container>
      <Header>
        <ButtonBack
          onPress={() => navigation.navigate('Dashboard')}
        >
          <TitleButton>Voltar</TitleButton>
        </ButtonBack>
        <HeaderTitle>
          <Title>Status</Title>
        </HeaderTitle>
      </Header>

      <Separator />

      <SynchronizeID>
       <IDsCards />
      </SynchronizeID>
    </Container>
  )
}
