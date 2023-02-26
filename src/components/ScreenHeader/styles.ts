import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    height: ${theme.metrics.px(20)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.metrics.px(16)}px;
    background-color: ${theme.colors.white};
    margin-top: ${Platform.OS === 'android' ? theme.metrics.px(10) : 0}px;
  `}
`;

export const HeaderTitleContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: ${theme.metrics.px(10)}px;
    z-index: 1;
    position: absolute;
    left: 0;
  `}
`;
