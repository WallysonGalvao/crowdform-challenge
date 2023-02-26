import { SafeAreaView as RNSAContext } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const SafeAreaView = styled(RNSAContext)`
  ${({ theme }) => css`
    flex: 1;
    padding-horizontal: ${theme.metrics.px(15)}px;
    background-color: ${theme.colors.white};
  `}
`;

export const Image = styled.Image`
  ${({ theme }) => css`
    width: ${theme.metrics.px(100)}px;
    height: ${theme.metrics.px(100)}px;
    border-radius: ${theme.metrics.px(50)}px;
    border-width: ${theme.metrics.px(2)}px;
    border-color: ${theme.colors.black};
    align-self: center;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    align-self: center;
    font-size: ${theme.metrics.px(26)}px;
    letter-spacing: 1px;
    font-family: 'semiBold';
  `}
`;

export const Bio = styled.Text`
  ${({ theme }) => css`
    margin-vertical: ${theme.metrics.px(10)}px;
    letter-spacing: 1px;
    font-family: 'regular';
  `}
`;

export const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialItem = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${theme.metrics.px(100)}px;
    margin-vertical: ${theme.metrics.px(10)}px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-radius: ${theme.metrics.px(5)}px;
    padding: ${theme.metrics.px(5)}px;
  `}
`;

export const SocialName = styled(Bio)`
  ${({ theme }) => css`
    margin-vertical: ${theme.metrics.px(5)}px;
  `}
`;

export const Section = styled(Bio)`
  ${({ theme }) => css`
    margin-vertical: ${theme.metrics.px(5)}px;
  `}
`;
