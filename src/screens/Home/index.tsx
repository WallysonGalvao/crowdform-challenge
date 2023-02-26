import { Icon } from '@app/components/Icon';
import { Separator } from '@app/components/Separator';
import { Text } from '@app/components/Text';
import { FUNDS, FundsProps } from '@app/utils/data';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export const HomeScreen = () => {
  const { navigate } = useNavigation();

  const handleFund = (fund: FundsProps) => navigate('Details', { fund });

  return (
    <S.SafeAreaView edges={['top']}>
      <S.Header>
        <S.IconRounded>
          <Icon name="user" />
        </S.IconRounded>
        <S.HeaderTextContainer>
          <Text fontFamily="semiBold">Account: $1,457.23</Text>
          <Icon
            name="chevron_down"
            width={15}
            height={15}
            style={{ marginLeft: 5 }}
          />
        </S.HeaderTextContainer>
        <Icon name="bell" />
      </S.Header>

      <S.SubHeaderContainer>
        <Text fontSize={12}>Portfolio</Text>
        <S.SubHeader>
          <S.SubHeaderLeft>
            <Text fontFamily="semiBold" fontSize={24}>
              $1,245.23
            </Text>
            <Icon
              name="percentage_up"
              width={10}
              height={10}
              style={{ marginHorizontal: 5 }}
            />
            <Text color="caribbeanGreen">31.82%</Text>
          </S.SubHeaderLeft>

          <S.EarnContainer>
            <Icon name="coin" style={{ marginRight: 5 }} />
            <Text color="frenchViolet" fontFamily="semiBold" fontSize={12}>
              Earn Rewards
            </Text>
          </S.EarnContainer>
        </S.SubHeader>
      </S.SubHeaderContainer>

      <S.SeparatorContainer>
        <Separator />
      </S.SeparatorContainer>

      <S.ScrollView>
        <S.Content>
          <Text
            fontFamily="semiBold"
            fontSize={18}
            style={{
              marginLeft: 15,
            }}>
            Funds
          </Text>

          <S.FundsContainer>
            {FUNDS.map(fund => {
              return (
                <S.FundsContent key={fund.id} onPress={() => handleFund(fund)}>
                  <Icon
                    name={fund.iconName}
                    width={14}
                    height={14}
                    style={{ marginBottom: 5 }}
                  />
                  <Text fontFamily="semiBold">{fund.label}</Text>
                  <Icon name={fund.iconGraph} width={100} height={70} />

                  <S.FundsContentBottom>
                    <Text fontSize={13}>{fund.value}</Text>
                    <S.PercentageContainer>
                      <Icon
                        name={fund.iconPercentage}
                        width={10}
                        height={10}
                        style={{ marginRight: 2 }}
                      />
                      <Text color={fund.percetageColor} fontSize={13}>
                        {fund.percetageValue}
                      </Text>
                    </S.PercentageContainer>
                  </S.FundsContentBottom>
                </S.FundsContent>
              );
            })}
          </S.FundsContainer>

          <S.BusinessStatisticsContainer>
            <S.BusinessStatisticsLeft>
              <Text color="white" fontFamily="semiBold" fontSize={16}>
                Learn more about carbon credits
              </Text>
              <Text color="white" fontSize={12}>
                Check out our top tips!
              </Text>
            </S.BusinessStatisticsLeft>
            <S.BusinessStatisticsRight>
              <Icon name="business_statistics" width={100} height={100} />
            </S.BusinessStatisticsRight>
          </S.BusinessStatisticsContainer>

          <S.ItemContainer>
            <S.Item>
              <Text fontFamily="semiBold">Why should you invest here?</Text>
            </S.Item>
            <S.Item />
          </S.ItemContainer>
        </S.Content>
      </S.ScrollView>
    </S.SafeAreaView>
  );
};
