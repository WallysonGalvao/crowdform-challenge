import styled, { css } from 'styled-components/native';

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
