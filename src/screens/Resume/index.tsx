import { Linking, ScrollView } from 'react-native';

import { Button } from '@app/components/Button';
import { useAuthStore } from '@app/services/stores/auth';
import Foundation from '@expo/vector-icons/Foundation';

import resume from './resume.json';
import * as S from './styles';

export const ResumeScreen = () => {
  const handleSocial = (url: string) => Linking.openURL(url);

  const { reset } = useAuthStore();

  const handleReset = () => reset();

  return (
    <S.SafeAreaView edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Image source={{ uri: resume.photo }} />
        <S.Name>{resume.name}</S.Name>

        <S.Section>
          Um breve resumo sobre mim e o que estou fazendo atualmente:
        </S.Section>

        <S.Bio>{resume.bio}</S.Bio>

        <S.Section>Você me encontra em uma dessas redes:</S.Section>

        <S.SocialContainer>
          {resume.socials.map(social => (
            <S.SocialItem
              key={social.name}
              onPress={() => handleSocial(social.url)}>
              <Foundation name={social.icon} size={50} />
              <S.SocialName>{social.name}</S.SocialName>
            </S.SocialItem>
          ))}
        </S.SocialContainer>

        <Button onPress={handleReset}>Reset app cache</Button>
      </ScrollView>
    </S.SafeAreaView>
  );
};
