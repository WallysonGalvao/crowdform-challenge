import { LAYOUT } from '@app/utils/constants';
import { lighten } from 'polished';
import styled, { css } from 'styled-components/native';

import { CustomButtonProps } from '.';

type ButtonTitleProps = Pick<CustomButtonProps, 'textColor'>;
type ButtonContainerProps = Pick<
  CustomButtonProps,
  'buttonColor' | 'borderColor'
>;

export const ButtonContainer = styled.TouchableHighlight.attrs<ButtonContainerProps>(
  ({ theme, buttonColor }) => ({
    underlayColor: lighten(
      0.2,
      String(theme.colors[buttonColor || 'frenchViolet']),
    ),
  }),
)<ButtonContainerProps>`
  ${({ theme, buttonColor, borderColor, disabled }) => css`
    width: 100%;
    height: ${theme.metrics.px(LAYOUT.INPUT.HEIGHT)}px;
    border-radius: ${theme.metrics.px(4)}px;
    background-color: ${theme.colors[buttonColor || 'frenchViolet']};
    justify-content: center;
    align-items: center;

    ${borderColor &&
    css`
      border-width: 1px;
      border-color: ${theme.colors[borderColor]};
    `}

    ${disabled &&
    css`
      background-color: ${theme.colors.quickSilver};
    `}
  `}
`;

export const ButtonTitle = styled.Text<ButtonTitleProps>`
  ${({ theme, textColor }) => css`
    font-family: 'regular';
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors[textColor || 'white']};
  `}
`;
