import { LAYOUT } from '@app/utils/constants';
import { lighten } from 'polished';
import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableHighlight.attrs(({ theme }) => ({
  underlayColor: lighten(0.2, String(theme.colors.frenchViolet)),
}))`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.metrics.px(LAYOUT.INPUT.HEIGHT)}px;
    border-radius: ${theme.metrics.px(4)}px;
    background-color: ${theme.colors.frenchViolet};
    justify-content: center;
    align-items: center;
  `}
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-family: 'regular';
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.white};
  `}
`;
