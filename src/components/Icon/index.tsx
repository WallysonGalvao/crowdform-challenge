import { useMemo } from 'react';

import * as icons from '@app/assets/svg';
import { theme } from '@app/styles/theme';
import { SvgProps } from 'react-native-svg';

export type IconNames = Lowercase<keyof typeof icons>;

type IconProps = SvgProps & {
  name: IconNames;
  width?: number;
  height?: number;
};

const SIZE = 24;

export const Icon = ({
  name,
  width,
  height,
  color = theme.colors.black,
}: IconProps) => {
  const IconSVG = useMemo(
    () => icons[name.toUpperCase() as Uppercase<IconNames>],
    [name],
  );

  const rWidth = useMemo(() => theme.metrics.px(width || SIZE), [width]);
  const rHeight = useMemo(() => theme.metrics.px(height || SIZE), [height]);

  return <IconSVG width={rWidth} height={rHeight} color={color} />;
};
