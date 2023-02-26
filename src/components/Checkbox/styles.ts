import { colors } from '@app/styles/colors';
import styled, { css } from 'styled-components/native';

type CheckboxTextProps = {
  color?: keyof typeof colors;
};

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CheckboxText = styled.Text<CheckboxTextProps>`
  ${({ theme, color }) => css`
    width: 95%;
    font-family: 'regular';
    font-size: ${theme.metrics.px(12)}px;
    margin-left: ${theme.metrics.px(6)}px;
    color: ${theme.colors[color || 'quickSilver']};
    margin-bottom: ${theme.metrics.px(5)}px;
  `}
`;

export const CheckboxSquare = styled.View`
  ${({ theme }) => css`
    width: ${theme.metrics.px(14)}px;
    height: ${theme.metrics.px(14)}px;
    border-radius: ${theme.metrics.px(2)}px;
    border-width: ${theme.metrics.px(1)}px;
    border-color: ${theme.colors.quickSilver};
    align-items: center;
    justify-content: center;
  `}
`;

export const CheckboxFillSquare = styled.View<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    width: ${theme.metrics.px(10)}px;
    height: ${theme.metrics.px(10)}px;
    border-radius: ${theme.metrics.px(2)}px;
    background-color: ${checked ? theme.colors.frenchViolet : 'transparent'};
  `}
`;
