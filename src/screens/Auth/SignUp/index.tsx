import { useMemo, useRef, useState } from 'react';
import { ScrollView, TextInput } from 'react-native';
import Toast from 'react-native-toast-message';

import { Button } from '@app/components/Button';
import Checkbox from '@app/components/Checkbox';
import Input from '@app/components/Input';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';

import { formSettings } from './settings';
import * as S from './styles';
import { useAuthStore } from '@app/services/stores/auth';
import { ScreenHeader } from '@app/components/ScreenHeader';

export const SignUpScreen = () => {
  const { goBack } = useNavigation();
  const lastnameRef = useRef<TextInput | null>(null);
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const { users, setUsers, setToken } = useAuthStore();

  const [checked, setChecked] = useState(false);

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: formSettings.initialValues,
    validationSchema: formSettings.validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async data => {
      const found = users?.some(user => user.email === data.email);
      if (!!found) {
        Toast.show({
          type: 'info',
          text1: 'User already registered',
        });
      } else {
        Toast.show({
          type: 'success',
          text1: 'Successfully registered user',
        });
        setUsers(data);
        setToken(true);
      }
    },
  });

  const disableButton = useMemo(
    () =>
      JSON.stringify(values) === JSON.stringify(formSettings.initialValues) ||
      Object.keys(errors)?.length !== 0,
    [values, errors],
  );

  const onPressHighlight = (highlight: string) => console.log({ highlight });

  return (
    <S.SafeAreaView>
      <ScreenHeader title="Create your account" />

      <S.ScrollView>
        <Input
          autoComplete="username"
          label="First Name"
          value={values.firstname}
          error={errors.firstname}
          placeholder="Type your first name"
          returnKeyType="next"
          onChangeText={(value: string) => setFieldValue('firstname', value)}
          onSubmitEditing={() => lastnameRef?.current?.focus()}
        />

        <Input
          ref={lastnameRef}
          autoComplete="name-middle"
          label="Last Name"
          value={values.lastname}
          error={errors.lastname}
          placeholder="Type your last name"
          returnKeyType="next"
          onChangeText={(value: string) => setFieldValue('lastname', value)}
          onSubmitEditing={() => emailRef?.current?.focus()}
        />

        <Input
          ref={emailRef}
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

        <Checkbox
          text="I am over 18 years of age and I have read and agree to the Terms of Service and Privacy Policy."
          highlightTexts={['Terms of Service', 'Privacy Policy']}
          onPressHighlight={onPressHighlight}
          checked={checked}
          onPress={() => setChecked(!checked)}
        />

        <Button onPress={() => handleSubmit()} disabled={disableButton}>
          Create account
        </Button>

        <S.NotRegistered onPress={goBack}>
          Already have an account? <S.SignUpText>Log in here</S.SignUpText>
        </S.NotRegistered>
      </S.ScrollView>
    </S.SafeAreaView>
  );
};
