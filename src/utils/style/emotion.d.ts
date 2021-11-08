import '@emotion/react';

type GrayScaleColorTypes = | 'titleActive' | 'font' | 'lightFont' | 'placeHolder' | 'line' | 'inputBackground' | 'background'| 'offWhite';
type ColorTypes = | 'basicBlue' | 'lightBlue' | 'darkBlue' | 'basicGreen' | 'lightGreen' | 'darkGreen' | 'error' | 'lightRed' | 'darkRed';
type FontSizeNames = 'root' | '12' | '14' | '16' | '18' | '20' | '24' | '28' | '32';

declare module '@emotion/react' {
  export interface Theme {
    fontSizes: {
      [sizeNames in FontSizeNames]: string;
    };
    grayScaleColors: {
      [color in GrayScaleColorTypes]: string;
    };
    colors: {
      [color in ColorTypes]: string;
    };
  }
}
