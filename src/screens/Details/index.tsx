import { useCallback, useState } from 'react';
import { Dimensions } from 'react-native';

import { Button } from '@app/components/Button';
import { Icon } from '@app/components/Icon';
import { ScreenHeader } from '@app/components/ScreenHeader';
import { Separator } from '@app/components/Separator';
import { Text } from '@app/components/Text';
import { PrivateRootStackParamList } from '@app/routes/privateRoutes';
import {
  FILTERS,
  FUND_CARDS,
  FUND_MENUS,
  INFO_STATS,
  InfoStatsProps,
} from '@app/utils/data';
import { RouteProp, useRoute } from '@react-navigation/native';

import * as S from './styles';

const { width } = Dimensions.get('screen');

type DetailsScreenRouteProp = RouteProp<PrivateRootStackParamList, 'Details'>;

export const DetailsScreen = () => {
  const { params } = useRoute<DetailsScreenRouteProp>();
  const { fund } = params;

  const [filterSelected, setFilterSelected] = useState(1);
  const [menuSelected, setMenuSelected] = useState(0);

  const handleFilter = (filterIndex: number) => setFilterSelected(filterIndex);

  const handleMenu = (menuIndex: number) => setMenuSelected(menuIndex);

  const TableItem = useCallback(
    ({ info }: { info: InfoStatsProps }) => (
      <S.TableRow>
        <S.TableLabel>
          <Text color="quickSilver">{info.label}</Text>
          <Icon name="tooltip" width={15} />
        </S.TableLabel>
        <Text>{info.value}</Text>
      </S.TableRow>
    ),
    [],
  );

  return (
    <S.SafeAreaView>
      <ScreenHeader title={fund.label} subTitle={fund.shortName} />
      <Separator />

      <S.ScrollView>
        <S.SubHeader>
          <S.SubHeaderLeft>
            <Text fontSize={24} fontFamily="semiBold">
              {fund.value}
            </Text>
            <S.SubHeaderPercentage>
              <Icon
                name={fund.iconPercentage}
                width={13}
                height={13}
                style={{ marginRight: 5 }}
              />
              <Text
                color={
                  fund.percetageColor
                }>{`${fund.percetageValue} ($1.21)`}</Text>
            </S.SubHeaderPercentage>
          </S.SubHeaderLeft>
          <Text fontSize={24} fontFamily="semiBold">
            2022
          </Text>
        </S.SubHeader>

        <S.FullGraphContainer>
          <S.FlutuantTextTop>
            <Text color="quickSilver">$19.02</Text>
          </S.FlutuantTextTop>
          <Icon
            name="full_graph"
            width={width - 15}
            height={width / 2}
            color={fund.graphColor}
          />
          <S.FlutuantTextBottom>
            <Text color="quickSilver">$17.66</Text>
          </S.FlutuantTextBottom>
        </S.FullGraphContainer>

        <S.FilterContainer>
          {FILTERS.map((filter, index) => {
            const isSelected = filterSelected === index;
            return (
              <S.FilterItem
                key={filter.label}
                isSelected={isSelected}
                onPress={() => handleFilter(index)}>
                <Text
                  color={isSelected ? 'frenchViolet' : 'quickSilver'}
                  fontFamily={isSelected ? 'semiBold' : 'regular'}>
                  {filter.label}
                </Text>
              </S.FilterItem>
            );
          })}
        </S.FilterContainer>

        <S.PaddingHorizontal>
          <S.SectionTitle>
            <Text fontFamily="semiBold">Info & Stats</Text>
          </S.SectionTitle>

          <S.Table>
            <S.TableColumn>
              {INFO_STATS.filter((_, index) => index <= 2).map(info => (
                <TableItem key={info.label} info={info} />
              ))}
            </S.TableColumn>
            <S.TableColumn>
              {INFO_STATS.filter((_, index) => index >= 3).map(info => (
                <TableItem key={info.label} info={info} />
              ))}
            </S.TableColumn>
          </S.Table>

          <S.SectionTitle>
            <Text fontFamily="semiBold">Fund Breakdown</Text>
          </S.SectionTitle>

          <S.MenuContainer>
            {FUND_MENUS.map((menu, index) => {
              const isSelected = menuSelected === index;
              return (
                <S.MenuItem
                  key={menu.label}
                  isSelected={isSelected}
                  onPress={() => handleMenu(index)}>
                  <Text color={isSelected ? 'black' : 'gray'}>
                    {menu.label}
                  </Text>
                </S.MenuItem>
              );
            })}
          </S.MenuContainer>
        </S.PaddingHorizontal>

        <S.FundsContainer>
          {FUND_CARDS.map(card => {
            return (
              <S.CardItem key={card.id}>
                <S.ImageCard source={card.image} />
                <S.CardContent>
                  <S.ImageFund source={card.fundImage} />
                  <Text fontSize={13}>{card.description}</Text>
                  <S.ReadMore>Read More</S.ReadMore>
                </S.CardContent>
              </S.CardItem>
            );
          })}
        </S.FundsContainer>

        <S.PaddingHorizontal>
          <S.SectionTitle>
            <Icon name="portfolio" style={{ marginRight: 5 }} />
            <Text fontFamily="semiBold">Your Portfolio</Text>
          </S.SectionTitle>

          <S.PortfolioContainer>
            <S.PortfolioLeft>
              <Text fontFamily="semiBold" fontSize={24}>
                18 credits
              </Text>
              <S.SubHeaderPercentage>
                <Icon
                  name="percentage_up"
                  width={13}
                  height={13}
                  style={{ marginRight: 5 }}
                />
                <Text color="caribbeanGreen">8.41%</Text>
              </S.SubHeaderPercentage>
            </S.PortfolioLeft>
            <S.PortfolioRight>
              <Text fontFamily="semiBold" fontSize={24}>
                $328.14
              </Text>
              <Text color="quickSilver">Last purchase 28d ago</Text>
            </S.PortfolioRight>
          </S.PortfolioContainer>

          <S.PortfolioContainer>
            <S.ButtonContainer>
              <Button
                textColor="frenchViolet"
                buttonColor="white"
                borderColor="quickSilver">
                Sell
              </Button>
            </S.ButtonContainer>
            <S.ButtonContainer>
              <Button buttonColor="caribbeanGreen">Retire credits</Button>
            </S.ButtonContainer>
          </S.PortfolioContainer>
          <Text color="quickSilver" fontSize={12}>
            You’ve previously retired 28 credits of this asset
          </Text>

          <S.InfoContainer>
            <Text fontSize={12} color="quickSilver">
              {
                'Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order. \n\nThe information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.'
              }
            </Text>
          </S.InfoContainer>
          <Button>Buy</Button>
        </S.PaddingHorizontal>
      </S.ScrollView>
    </S.SafeAreaView>
  );
};
