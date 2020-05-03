import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { MuiThemeProvider } from "@material-ui/core";
import DefaultTheme from "../src/components/settings/themes";

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: false,
    storySort: (a, b) =>
        a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

addDecorator(storyFn => <MuiThemeProvider theme={DefaultTheme}><div style={{display: 'flex', justifyContent: 'center', padding: '10px 0'}}>{storyFn()}</div> </MuiThemeProvider>)
