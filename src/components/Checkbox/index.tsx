import * as S from './styles';

type CheckboxProps = {
  text: string;
  highlightTexts?: string[];
  onPressHighlight: (highlight: string) => void;
  checked: boolean;
  onPress: () => void;
};

const Checkbox = ({
  text,
  highlightTexts,
  onPressHighlight,
  checked,
  onPress,
}: CheckboxProps) => {
  const textParts = highlightTexts
    ? text.split(new RegExp(`(${highlightTexts.join('|')})`, 'gi'))
    : [text];

  return (
    <S.Container onPress={onPress}>
      <S.CheckboxSquare>
        <S.CheckboxFillSquare checked={checked} />
      </S.CheckboxSquare>
      <S.CheckboxText>
        {textParts.map((part, index) => {
          const isHighlight = highlightTexts?.includes(part);
          return (
            <S.CheckboxText
              key={index}
              color={isHighlight ? 'black' : 'quickSilver'}
              onPress={() => onPressHighlight(part)}
              disabled={!isHighlight}>
              {part}
            </S.CheckboxText>
          );
        })}
      </S.CheckboxText>
    </S.Container>
  );
};

export default Checkbox;
