import { Dimensions } from 'react-native';

import { SafeAreaView as RNSAContext } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

const { width } = Dimensions.get('screen');
export const SafeAreaView = styled(RNSAContext)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding-horizontal: ${theme.metrics.px(5)}px;
  `}
`;

export const TextContainer = styled.View`
  ${({ theme }) => css`
    align-self: center;
    top: ${theme.metrics.px(width - 200)}px;
  `}
`;
