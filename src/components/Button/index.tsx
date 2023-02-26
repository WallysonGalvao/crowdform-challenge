import { TouchableHighlightProps } from 'react-native';

import * as S from './styles';

type CustomButtonProps = TouchableHighlightProps & {
  children: React.ReactNode;
};

export const Button = ({ children, onPress }: CustomButtonProps) => {
  return (
    <S.ButtonContainer onPress={onPress}>
      <S.ButtonTitle>{children}</S.ButtonTitle>
    </S.ButtonContainer>
  );
};
