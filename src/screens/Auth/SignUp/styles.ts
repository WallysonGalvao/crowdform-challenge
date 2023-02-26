import { SafeAreaView as RNSAContext } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const SafeAreaView = styled(RNSAContext)`
  ${({ theme }) => css`
    flex: 1;
    padding-horizontal: ${theme.metrics.px(15)}px;
    background-color: ${theme.colors.white};
  `}
`;

export const LoginText = styled.Text`
  ${({ theme }) => css`
    font-family: 'semiBold';
    font-size: ${theme.metrics.px(18)}px;
    text-align: center;
  `}
`;

export const NotRegistered = styled.Text`
  ${({ theme }) => css`
    font-family: 'regular';
    font-size: ${theme.metrics.px(12)}px;
    color: ${theme.colors.quickSilver};
    text-align: center;
    margin-top: ${theme.metrics.px(10)}px;
  `}
`;

export const SignUpText = styled(NotRegistered)`
  ${({ theme }) => css`
    text-decoration: underline ${theme.colors.quickSilver};
  `}
`;
