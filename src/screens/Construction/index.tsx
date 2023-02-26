import AnimatedLottie from '@app/components/Lottie';
import { Text } from '@app/components/Text';

import * as S from './styles';

export const ConstructionScreen = () => {
  return (
    <S.SafeAreaView>
      <S.TextContainer>
        <Text fontSize={30} fontFamily="semiBold">
          Under Construction
        </Text>
      </S.TextContainer>
      <AnimatedLottie name="construction" />
    </S.SafeAreaView>
  );
};
