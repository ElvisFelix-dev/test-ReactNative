import React, { useState } from 'react';

import compassImg from '../../assets/compass.png'

import {
  Container,
  Header,
  UserInfo,
  UserWrapper,
  UserGreenting,
  Photo,
  User,
  UserName,
  StatusButton,
  TextStatusButton,
  MainStatus,
  Image,
  TitleTrancking,
  GPSStatus,
  InfoStatus,
  Separator,
  StatusService,
  ContainerStatus,
  StatusTitle,
  StatusSubTitle,
  StatusSwitch,
} from './styles';

export function Dashboard() {
  const [ status, setStatus ] = useState(false)

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/51929648?v=4'}} />

            <User>
              <UserGreenting>Olá, bem-vindo</UserGreenting>
              <UserName>Elvis Felix</UserName>
            </User>

          </UserInfo>

          <StatusButton onPress={() => {}}>
            <TextStatusButton>Status</TextStatusButton>
          </StatusButton>
        </UserWrapper>
      </Header>

      <MainStatus>
        <Image source={compassImg} />
        <InfoStatus>
          <TitleTrancking>My GPS - Trancking</TitleTrancking>
          <GPSStatus>{status ? 'Online' : 'Offline'}</GPSStatus>
        </InfoStatus>
      </MainStatus>
      <Separator />

      <StatusService>
       <ContainerStatus>
        <StatusTitle>Status do serviço</StatusTitle>
        <StatusSubTitle>Serviço ativo</StatusSubTitle>
       </ContainerStatus>
        <StatusSwitch
          value={status}
          onValueChange={ (valorSelecionado) => setStatus(valorSelecionado)}
          trackColor={{ false: '#FFFFFF' , true: '#FFFFFF'}}
          thumbColor={status ? '#12A454' : '#E83F5B'}
        />
      </StatusService>

    </Container>
  );
}
