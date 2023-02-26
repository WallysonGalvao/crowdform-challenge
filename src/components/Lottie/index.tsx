import { useMemo } from 'react';

import * as animations from '@app/assets/animations';
import AnimatedLottieView from 'lottie-react-native';

export type AnimationNames = Lowercase<keyof typeof animations>;

type LottieProps = {
  name: AnimationNames;
};

const AnimatedLottie = ({ name }: LottieProps) => {
  const animation = useMemo(
    () => animations[name.toUpperCase() as Uppercase<AnimationNames>],
    [name],
  );

  return <AnimatedLottieView source={animation} autoPlay loop />;
};

export default AnimatedLottie;
