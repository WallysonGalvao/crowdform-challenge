import { Platform } from 'react-native';
import { SafeAreaView as RNSAContext } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const SafeAreaView = styled(RNSAContext)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`;

export const ScrollView = styled.ScrollView.attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: theme.metrics.px(20),
  },
}))``;

export const SubHeader = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: ${theme.metrics.px(15)}px;
    padding-top: ${theme.metrics.px(15)}px;
  `}
`;

export const SubHeaderLeft = styled.View``;

export const SubHeaderPercentage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FlutuantTextTop = styled.View`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.metrics.px(Platform.OS === 'android' ? -5 : 0)}px;
    left: ${theme.metrics.px(Platform.OS === 'android' ? 190 : 205)}px;
  `}
`;

export const FlutuantTextBottom = styled.View`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.metrics.px(Platform.OS === 'android' ? 160 : 175)}px;
    left: ${theme.metrics.px(40)}px;
  `}
`;

export const FilterContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: ${theme.metrics.px(15)}px;
    padding-vertical: ${theme.metrics.px(
      Platform.OS === 'android' ? 35 : 20,
    )}px;
  `}
`;

export const FilterItem = styled.TouchableOpacity<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    width: ${theme.metrics.px(35)}px;
    height: ${theme.metrics.px(35)}px;
    border-radius: ${theme.metrics.px(4)}px;
    background-color: ${theme.colors[isSelected ? 'magnolia' : 'white']};
    align-items: center;
    justify-content: center;
  `}
`;

export const Table = styled.View`
  flex-direction: row;
`;

export const TableRow = styled.View`
  ${({ theme }) => css`
    padding-vertical: ${theme.metrics.px(5)}px;
  `}
`;

export const TableLabel = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TableColumn = styled.View`
  flex: 1;
`;

export const PaddingHorizontal = styled.View`
  ${({ theme }) => css`
    padding-horizontal: ${theme.metrics.px(15)}px;
  `}
`;

export const SectionTitle = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    margin-top: ${theme.metrics.px(15)}px;
    margin-bottom: ${theme.metrics.px(10)}px;
  `}
`;

export const MenuContainer = styled.View`
  flex-direction: row;
`;

export const MenuItem = styled.TouchableOpacity<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    margin-right: ${theme.metrics.px(15)}px;
    margin-bottom: ${theme.metrics.px(10)}px;
    padding-bottom: ${theme.metrics.px(2)}px;
    border-bottom-width: ${isSelected ? 2 : 0}px;
    border-bottom-color: ${theme.colors.frenchViolet};
  `}
`;

export const FundsContainer = styled.ScrollView.attrs(({ theme }) => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    marginTop: theme.metrics.px(5),
    paddingLeft: theme.metrics.px(15),
  },
}))``;

export const CardItem = styled.View`
  ${({ theme }) => css`
    height: ${theme.metrics.px(260)}px;
    width: ${theme.metrics.px(220)}px;
    border-radius: ${theme.metrics.px(4)}px;
    border-width: 1px;
    border-color: ${theme.colors.platinum};
    margin-right: ${theme.metrics.px(15)}px;
  `}
`;

export const CardContent = styled.View`
  ${({ theme }) => css`
    padding: ${theme.metrics.px(10)}px;
  `}
`;

export const ImageContainer = styled.View`
  ${({ theme }) => css`
    height: ${theme.metrics.px(106)}px;
    width: ${theme.metrics.px(220)}px;
    border-top-left-radius: ${theme.metrics.px(4)}px;
    border-top-right-radius: ${theme.metrics.px(4)}px;

    overflow: hidden;
  `}
`;

export const ImageCard = styled.Image`
  ${({ theme }) => css`
    height: ${theme.metrics.px(106)}px;
    width: ${theme.metrics.px(218)}px;
    border-top-left-radius: ${theme.metrics.px(4)}px;
    border-top-right-radius: ${theme.metrics.px(4)}px;
  `}
`;

export const ImageFund = styled.Image.attrs({
  resizeMode: 'contain',
})`
  ${({ theme }) => css`
    width: ${theme.metrics.px(100)}px;
    height: ${theme.metrics.px(20)}px;
    left: ${theme.metrics.px(-10)}px;
    margin-bottom: ${theme.metrics.px(10)}px;
  `}
`;

export const ReadMore = styled.Text`
  ${({ theme }) => css`
    font-family: 'regular'
    font-size: ${theme.metrics.px(13)}px;
    color: ${theme.colors.black};
    text-decoration: underline;
    margin-top: ${theme.metrics.px(10)}px;
  `}
`;

export const InfoContainer = styled.View`
  ${({ theme }) => css`
    height: ${theme.metrics.px(115)}px;
    border-radius: ${theme.metrics.px(4)}px;
    padding: ${theme.metrics.px(10)}px;
    background-color: ${theme.colors.cultured};
    margin-vertical: ${theme.metrics.px(10)}px;
  `}
`;

export const PortfolioContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.metrics.px(5)}px;
    margin-vertical: ${theme.metrics.px(10)}px;
  `}
`;

export const PortfolioLeft = styled.View``;

export const PortfolioRight = styled.View`
  align-items: flex-end;
`;

export const ButtonContainer = styled.View`
  width: 48%;
`;

export const FullGraphContainer = styled.View`
  align-items: center;
  align-self: center;
`;
