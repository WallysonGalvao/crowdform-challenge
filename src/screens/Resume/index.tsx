import React from 'react';
import { Linking } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';

import * as S from './styles';

import resume from './resume.json';

export const ResumeScreen = () => {
  const handleSocial = (url: string) => Linking.openURL(url);

  return (
    <S.SafeAreaView>
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
    </S.SafeAreaView>
  );
};
