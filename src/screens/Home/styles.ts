import { SafeAreaView as RNSAContext } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const SafeAreaView = styled(RNSAContext)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Header = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: ${theme.metrics.px(15)}px;
  `}
`;

export const IconRounded = styled.View`
  ${({ theme }) => css`
    width: ${theme.metrics.px(32)}px;
    height: ${theme.metrics.px(32)}px;
    border-radius: ${theme.metrics.px(16)}px;
    background-color: ${theme.colors.gray};
    align-items: center;
    justify-content: center;
  `}
`;

export const HeaderTextContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const SubHeaderContainer = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.metrics.px(20)}px;
    padding-horizontal: ${theme.metrics.px(15)}px;
  `}
`;

export const SubHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SubHeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EarnContainer = styled.View`
  ${({ theme }) => css`
    border-radius: ${theme.metrics.px(4)}px;
    padding: ${theme.metrics.px(10)}px;
    background-color: ${theme.colors.magnolia};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const SeparatorContainer = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.metrics.px(20)}px;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.metrics.px(20)}px;
  `}
`;

export const FundsContainer = styled.ScrollView.attrs(({ theme }) => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    marginTop: theme.metrics.px(15),
    paddingLeft: theme.metrics.px(15),
  },
}))``;

export const FundsContent = styled.View`
  ${({ theme }) => css`
    width: ${theme.metrics.px(140)}px;
    height: ${theme.metrics.px(145)}px;
    border-radius: ${theme.metrics.px(4)}px;
    border-width: 1px;
    border-color: ${theme.colors.platinum};
    margin-right: ${theme.metrics.px(10)}px;
    padding: ${theme.metrics.px(10)}px;
  `}
`;

export const FundsContentBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PercentageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: ${theme.metrics.px(15)}px;
    padding-horizontal: ${theme.metrics.px(15)}px;
  `}
`;

export const Item = styled.View`
  ${({ theme }) => css`
    height: ${theme.metrics.px(215)}px;
    width: ${theme.metrics.px(159)}px;
    border-radius: ${theme.metrics.px(10)}px;
    padding: ${theme.metrics.px(10)}px;
    background-color: ${theme.colors.gray};
  `}
`;

export const BusinessStatisticsContainer = styled.View`
  ${({ theme }) => css`
    height: ${theme.metrics.px(105)}px;
    width: ${theme.metrics.px(345)}px;
    border-radius: ${theme.metrics.px(10)}px;
    padding: ${theme.metrics.px(10)}px;
    background-color: ${theme.colors.frenchViolet};
    margin-top: ${theme.metrics.px(15)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-self: center;
  `}
`;

export const BusinessStatisticsLeft = styled.View`
  width: 60%;
  height: 100%;
  justify-content: space-around;
`;

export const BusinessStatisticsRight = styled.View`
  width: 30%;
`;
