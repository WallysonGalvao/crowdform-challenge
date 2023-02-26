import { Dimensions, PixelRatio } from 'react-native';

const FIGMA_WIDTH = 375;

const { width } = Dimensions.get('window');

/**
 * @param {number} valuePx - number
 * @returns The function is returning the value of the pixel.
 */
const px = (valuePx: number): number => {
  const widthPercent = (valuePx / FIGMA_WIDTH) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(String(widthPercent))) / 100,
  );

  return screenPixel;
};

export const metrics = { px };
