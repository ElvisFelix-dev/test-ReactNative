import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) =>theme.colors.primary};

  width: 100%;
  height: ${RFPercentage(11)}px;

  flex-direction: row;
  align-items: center;

`;


export const HeaderTitle = styled.Text`
  align-items: center;

  margin-top: ${RFValue(30)}px;

  margin-left: -80px;

`;

export const Title = styled.Text`
  font-family: ${({ theme }) =>theme.fonts.regular};
  color: ${({ theme }) =>theme.colors.shape};

  font-size: ${RFValue(18)}px;

  margin-top: ${RFValue(30)}px;
  padding-right: 200px;
  margin-left: 80px;
`;

export const ButtonBack = styled.TouchableOpacity`
  margin-top: ${RFValue(30)}px;
  padding-right: 200px;

  margin-left: 17px;
`;

export const TitleButton = styled.Text`
  font-family: ${({ theme }) =>theme.fonts.medium};
  color: ${({ theme }) =>theme.colors.shape};

  font-size: ${RFValue(18)}px;
`;

export const Separator = styled.View`
  margin-top: ${RFValue(30)}px;

  height: 1px;
  width: 100%;

  background-color: ${({ theme }) =>theme.colors.text};
`;

export const SynchronizeID = styled.View`
  flex: 1;
  padding: 0 17px;

  margin-top: ${RFPercentage(2)}px;
`;

export const ListID = styled.FlatList`

`;

