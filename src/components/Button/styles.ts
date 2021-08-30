import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface ContainerProps {
  online: boolean
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 20%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1.5px solid ${({ theme }) => theme.colors.success};
  border-radius: 5px;

  padding: 16px;

  background-color: ${({ theme, online }) =>
    online ? theme.colors.success : theme.colors.background
  };

`;


export const Title = styled.Text`
  font-family: ${({ theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.title};
`
