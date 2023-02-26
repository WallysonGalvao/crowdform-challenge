import { colors } from '@app/styles/colors';
import { TouchableHighlightProps } from 'react-native';

import * as S from './styles';

export type CustomButtonProps = TouchableHighlightProps & {
  children: React.ReactNode;
  textColor?: keyof typeof colors;
  buttonColor?: keyof typeof colors;
  borderColor?: keyof typeof colors;
};

export const Button = ({
  children,
  textColor,
  buttonColor,
  borderColor,
  onPress,
}: CustomButtonProps) => {
  return (
    <S.ButtonContainer
      buttonColor={buttonColor}
      borderColor={borderColor}
      onPress={onPress}>
      <S.ButtonTitle textColor={textColor}>{children}</S.ButtonTitle>
    </S.ButtonContainer>
  );
};
