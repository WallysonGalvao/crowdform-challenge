import { ImageSourcePropType } from 'react-native';

import aspiradac from '@app/assets/images/aspiradac.png';
import climeworks from '@app/assets/images/climeworks.png';
import image1 from '@app/assets/images/image1.png';
import image2 from '@app/assets/images/image2.png';
import { IconNames } from '@app/components/Icon';

export type InfoStatsProps = {
  label: string;
  value: string;
};

export type FundCardProps = {
  id: number;
  fundName: string;
  iconName: IconNames;
  description: string;
  fundImage: ImageSourcePropType;
  image: ImageSourcePropType;
};

export const FILTERS = [
  {
    label: '1h',
  },
  {
    label: '1d',
  },
  {
    label: '1w',
  },
  {
    label: '1m',
  },
  {
    label: '1y',
  },
  {
    label: 'All',
  },
];

export const INFO_STATS: InfoStatsProps[] = [
  {
    label: 'AUM',
    value: '$430.88mm',
  },
  {
    label: 'Vintage Range',
    value: '2019 - 2022',
  },
  {
    label: 'Price at Close',
    value: '$17.68',
  },
  {
    label: 'Issue Date',
    value: '18/04/2022',
  },
  {
    label: 'TER',
    value: '0.15%',
  },
  {
    label: 'Price at Open',
    value: '$17.74',
  },
];

export const FUND_MENUS = [
  {
    label: 'Highlighted',
  },
  {
    label: 'Value',
  },
  {
    label: 'Vintage',
  },
  {
    label: 'Registry',
  },
];

export const FUND_CARDS: FundCardProps[] = [
  {
    id: 0,
    fundName: 'AspiraDAC',
    iconName: 'wind',
    description:
      'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
    image: image1,
    fundImage: aspiradac,
  },
  {
    id: 1,
    fundName: 'climeworks',
    iconName: 'wind',
    description:
      'uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.',
    image: image2,
    fundImage: climeworks,
  },
];
