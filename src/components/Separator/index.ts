import styled, { css } from 'styled-components/native';

export const Separator = styled.View`
  ${({ theme }) => css`
    border-width: 1px;
    border-color: ${theme.colors.gray};
  `}
`;
