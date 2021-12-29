import '@emotion/react';

type GrayScaleColorTypes = 'titleActive' | 'font' | 'lightFont' | 'placeHolder' | 'line' | 'inputBackground' | 'background'| 'offWhite';
type ColorTypes = 'basicBlue' | 'lightBlue' | 'darkBlue' | 'basicGreen' | 'lightGreen' | 'darkGreen' | 'error' | 'lightRed' | 'darkRed';
type SectionColorTypes = 'skills' | 'projects';
type FontSizeNames = 'root' | '12' | '14' | '16' | '18' | '20' | '24' | '28' | '32' | '40' | '48' | '56' | '64' | '72' | '80';

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
    sectionColors: {
      [color in SectionColorTypes]: string;
    },
  }
}
