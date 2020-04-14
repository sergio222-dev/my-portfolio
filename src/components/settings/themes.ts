import { Theme as AugmentedTheme, createMuiTheme } from '@material-ui/core';
import variables from './variables';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    webPadding: {
      sectionPadding: string;
      debugMargin: () => string;
    };
    colors: {
      blue: string;
      blueWhite: string;
      yellow: string;
      white: string;
      gray: string;
      blueSecondary: string;
    };
    font: {
      size: string;
      links: string;
      title: string;
      normal: string;
      menu: string;
      secondary: string;
    };
    navbar: {
      height: string;
    };
  }

  interface ThemeOptions {
    webPadding: {
      sectionPadding: string;
      debugMargin: () => string;
    };
    colors: {
      blue: string;
      blueWhite: string;
      yellow: string;
      white: string;
      gray: string;
      blueSecondary: string;
    };
    font: {
      size: string;
      links: string;
      title: string;
      normal: string;
      menu: string;
      secondary: string;
    };
    navbar: {
      height: string;
    };
  }
}

/**
 * Default Theme
 */
const DefaultTheme: AugmentedTheme = createMuiTheme(variables);

export default DefaultTheme;
