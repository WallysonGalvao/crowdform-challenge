import { ImageSourcePropType } from 'react-native';

import aspiradac from '@app/assets/images/aspiradac.png';
import climeworks from '@app/assets/images/climeworks.png';
import image1 from '@app/assets/images/image1.png';
import image2 from '@app/assets/images/image2.png';
import { IconNames } from '@app/components/Icon';
import { colors } from '@app/styles/colors';

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

export type FundsProps = {
  id: number;
  shortName: string;
  iconName: IconNames;
  iconGraph: IconNames;
  iconPercentage: IconNames;
  label: string;
  value: string;
  percetageValue: string;
  percetageColor: keyof typeof colors;
  graphColor: '#0FDF8F' | '#EE8688';
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

export const USER = {
  firstname: 'John',
  lastname: 'Doe',
  email: 'john@doe.com',
  password: '12345678',
};

export const FUNDS: FundsProps[] = [
  {
    id: 0,
    iconName: 'wind',
    shortName: 'WFND',
    iconGraph: 'wind_graph',
    label: 'Wind Fund',
    value: '$1032.23',
    percetageValue: '3.51%',
    iconPercentage: 'percentage_up',
    percetageColor: 'caribbeanGreen',
    graphColor: '#0FDF8F',
  },
  {
    id: 1,
    iconName: 'solar',
    shortName: 'SFND',
    iconGraph: 'solar_graph',
    label: 'Solar Fund',
    value: '$986.61',
    percetageValue: '0.13%',
    iconPercentage: 'percentage_down',
    percetageColor: 'lightCoral',
    graphColor: '#EE8688',
  },
  {
    id: 2,
    iconName: 'nature',
    shortName: 'NFND',
    iconGraph: 'nature_graph',
    label: 'Nature Fund',
    value: '$1122.95',
    percetageValue: '5.31%',
    iconPercentage: 'percentage_up',
    percetageColor: 'caribbeanGreen',
    graphColor: '#0FDF8F',
  },
];
