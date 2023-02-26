import { colors } from '@app/styles/colors';
import styled, { css } from 'styled-components/native';

type TextProps = {
  fontFamily?: 'regular' | 'semiBold';
  fontSize?: number;
  color?: keyof typeof colors;
};

export const Text = styled.Text<TextProps>`
  ${({ theme, fontFamily, fontSize, color }) => css`
    font-family: ${fontFamily || 'regular'};
    font-size: ${theme.metrics.px(fontSize || 14)}px;
    color: ${theme.colors[color || 'black']};
  `}
`;
