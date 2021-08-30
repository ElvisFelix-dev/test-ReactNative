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
  TitleInterval,
  ButtonTypes
} from './styles';

import { Button } from '../../components/Button'


export default function Dashboard({navigation}) {
  const [ status, setStatus ] = useState(false)
  const [ pressButton, setPressButton ] = useState(false)

  function  handleSelectTime(type: boolean) {
    setPressButton(type)
  }

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

          <StatusButton
            onPress={() => navigation.navigate('Status')}
          >
            <TextStatusButton>Status</TextStatusButton>
          </StatusButton>
        </UserWrapper>
      </Header>

      <MainStatus>
        <Image source={compassImg} />
        <InfoStatus>
          <TitleTrancking>My GPS - Trancking</TitleTrancking>
          <GPSStatus online={status}>{status ? 'Online' : 'Offline'}</GPSStatus>
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

      <TitleInterval>Intervalo de comunicação</TitleInterval>

      <ButtonTypes>
        <Button
          title='10s'
          online={false}
          onPress={() => handleSelectTime(false)}
        />

        <Button
          title='5s'
          online={false}
          onPress={() => handleSelectTime(true)}
        />

        <Button
          online={false}
          title='3s'
          onPress={() => handleSelectTime(true)}
        />

        <Button
          online={false}
          title='1s'
          onPress={() => handleSelectTime(true)}
        />
      </ButtonTypes>

    </Container>
  );
}
