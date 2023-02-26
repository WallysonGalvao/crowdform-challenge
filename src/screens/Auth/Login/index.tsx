import { Button } from '@app/components/Button';
import Input from '@app/components/Input';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { formSettings } from './settings';

import * as S from './styles';

export const LoginScreen = () => {
  const passwordRef = useRef<TextInput | null>(null);

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: formSettings.initialValues,
    validationSchema: formSettings.validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async data => console.log({ data }),
  });

  const handleSignUp = () => {};

  return (
    <SafeAreaView
      style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 15 }}>
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

      <Button onPress={() => handleSubmit()}>Login</Button>

      <S.NotRegistered onPress={handleSignUp}>
        Don't have an account? <S.SignUpText>Sign up</S.SignUpText> here
      </S.NotRegistered>
    </SafeAreaView>
  );
};
