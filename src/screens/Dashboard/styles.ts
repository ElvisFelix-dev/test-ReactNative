import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

interface GPSStatusProps {
  online: boolean
}


export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;
  margin-top: ${ getStatusBarHeight() + RFValue(-20)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreenting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const StatusButton = styled.TouchableOpacity`
  margin-left: 17px;

`;

export const TextStatusButton = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;


export const MainStatus = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 17px;

  width: 100%;
  height: ${RFPercentage(20)}px;

`;

export const Image = styled.Image`
  height: 60px;
  width: 60px;

`;

export const TitleTrancking = styled.Text`
  margin-left: 17px;

  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const GPSStatus = styled.Text<GPSStatusProps>`
  color: ${({ theme, online }) =>
    online ? theme.colors.success : theme.colors.attention
  };

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  margin-right: 100px;

`;

export const InfoStatus = styled.View`
  align-items: center;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;

  background-color: ${({ theme }) =>theme.colors.text};
`;

export const StatusService = styled.View`
  width: 100%;

  padding: 0 24px;
  margin-top: ${ getStatusBarHeight() + RFValue(10)}px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;

`;

export const StatusTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const StatusSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StatusSwitch = styled.Switch`

`;

export const ContainerStatus = styled.View`

`;

export const TitleInterval = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  padding: 0 24px;
  margin-top: ${ getStatusBarHeight() + RFValue(10)}px;
`;

export const ButtonTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin: 10px 25px;
`;





