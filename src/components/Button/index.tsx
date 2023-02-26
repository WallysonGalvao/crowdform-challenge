import { TouchableHighlightProps } from 'react-native';

import { colors } from '@app/styles/colors';

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
  ...props
}: CustomButtonProps) => {
  return (
    <S.ButtonContainer
      buttonColor={buttonColor}
      borderColor={borderColor}
      onPress={onPress}
      {...props}>
      <S.ButtonTitle textColor={textColor}>{children}</S.ButtonTitle>
    </S.ButtonContainer>
  );
};
