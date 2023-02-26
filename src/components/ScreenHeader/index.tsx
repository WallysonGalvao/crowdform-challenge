import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { Icon } from '../Icon';
import { Text } from '../Text';

type ScreenHeaderProps = {
  title: string;
  subTitle?: string;
};

export const ScreenHeader = ({ title, subTitle }: ScreenHeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <S.Wrapper>
      <S.BackButton onPress={goBack}>
        <Icon name="arrow_left" />
      </S.BackButton>

      <S.HeaderTitleContainer>
        <Text fontFamily="semiBold" fontSize={17}>
          {title}
        </Text>
        {!!subTitle && <Text color="gray">{subTitle}</Text>}
      </S.HeaderTitleContainer>
    </S.Wrapper>
  );
};
