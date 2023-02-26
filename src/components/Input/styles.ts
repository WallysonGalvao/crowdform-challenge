import { LAYOUT } from '@app/utils/constants';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View<{ error: boolean }>`
  ${({ theme, error }) => css`
    height: ${theme.metrics.px(LAYOUT.INPUT.HEIGHT)}px;
    flex-direction: row;
    align-items: center;
    border-radius: ${theme.metrics.px(4)}px;
    padding: ${theme.metrics.px(12)}px;
    background-color: ${theme.colors.cultured};
    margin-bottom: ${theme.metrics.px(error ? 0 : 10)}px;
  `}
`;

export const TextInput = styled.TextInput<{ secureTextEntry?: boolean }>`
  ${({ theme, secureTextEntry }) => css`
    width: ${secureTextEntry ? 80 : 90}%;
    height: ${theme.metrics.px(LAYOUT.INPUT.HEIGHT)}px;
    font-family: 'regular';
    font-size: ${theme.metrics.px(14)}px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: 'regular';
    font-size: ${theme.metrics.px(12)}px;
    color: ${theme.colors.quickSilver};
    margin-bottom: ${theme.metrics.px(5)}px;
  `}
`;

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    margin-top: ${theme.metrics.px(4)}px;
    margin-bottom: ${theme.metrics.px(10)}px;
    margin-left: ${theme.metrics.px(4)}px;
  `}
`;

export const SecureTextContainer = styled.Pressable`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.metrics.px(15)}px;
  `}
`;
