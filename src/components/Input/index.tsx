import { forwardRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './styles';
import { Icon } from '../Icon';

type InputProps = TextInputProps & {
  label: string;
  error?: string;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, ...rest }, ref) => {
    const [secure, setSecure] = useState(!!rest.secureTextEntry);

    return (
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.Content error={!!error}>
          <S.TextInput ref={ref} {...rest} secureTextEntry={secure} />
          {rest?.secureTextEntry && (
            <S.SecureTextContainer onPress={() => setSecure(!secure)}>
              {secure ? <Icon name="eye_closed" /> : <Icon name="eye_open" />}
            </S.SecureTextContainer>
          )}
        </S.Content>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Container>
    );
  },
);

export default Input;
