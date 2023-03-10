import { useMemo, useRef } from 'react';
import { TextInput } from 'react-native';

import { Button } from '@app/components/Button';
import Input from '@app/components/Input';
import { useAuthStore } from '@app/services/stores/auth';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import Toast from 'react-native-toast-message';

import { formSettings } from './settings';
import * as S from './styles';

export const LoginScreen = () => {
  const { navigate } = useNavigation();
  const passwordRef = useRef<TextInput | null>(null);

  const { users, setToken } = useAuthStore();

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: formSettings.initialValues,
    validationSchema: formSettings.validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async data => {
      const found = users?.some(user => user.email === data.email);

      Toast.show({
        type: found ? 'success' : 'error',
        text1: found ? 'User logged in successfully' : 'User not found!',
      });

      setToken(!!found);
    },
  });

  const disableButton = useMemo(
    () => Object.keys(errors)?.length !== 0,
    [errors],
  );

  const handleSignUp = () => navigate('SignUp');

  return (
    <S.SafeAreaView>
      <S.LoginText>Login</S.LoginText>

      <Input
        autoComplete="email"
        autoCapitalize="none"
        label="E-mail"
        value={values.email}
        error={errors.email}
        placeholder="Type your e-mail"
        keyboardType="email-address"
        returnKeyType="next"
        onChangeText={(value: string) => setFieldValue('email', value)}
        onSubmitEditing={() => passwordRef?.current?.focus()}
      />

      <Input
        ref={passwordRef}
        secureTextEntry
        autoComplete="off"
        label="Password"
        value={values.password}
        error={errors.password}
        placeholder="Type your password"
        returnKeyType="done"
        onChangeText={value => setFieldValue('password', value)}
        onSubmitEditing={() => handleSubmit()}
      />

      <Button onPress={() => handleSubmit()} disabled={disableButton}>
        Login
      </Button>

      <S.NotRegistered onPress={handleSignUp}>
        Don't have an account? <S.SignUpText>Sign up</S.SignUpText> here
      </S.NotRegistered>
    </S.SafeAreaView>
  );
};
