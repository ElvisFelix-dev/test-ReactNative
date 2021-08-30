import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;

  margin-top: ${ getStatusBarHeight() + RFValue(-20)}px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const IDService = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ContainerID = styled.View`

`;

export const IDTitle = styled.Text`
  font-family: ${({ theme }) =>theme.fonts.medium};
  color: ${({ theme }) =>theme.colors.title};

  font-size: ${RFValue(18)}px;
`;

export const IDSubTitle = styled.Text`
  font-family: ${({ theme }) =>theme.fonts.medium};
  color: ${({ theme }) =>theme.colors.title};

  font-size: ${RFValue(18)}px;
`;

export const IDTime = styled.Text`
  font-family: ${({ theme }) =>theme.fonts.medium};
  color: ${({ theme }) =>theme.colors.text};

  font-size: ${RFValue(18)}px;

  margin-left: 170px;
  padding-bottom: 30px;

`;
