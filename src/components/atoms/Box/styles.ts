import { makeStyles, Theme } from '@material-ui/core';
import { FlexDirectionProperty, JustifyContentProperty, AlignItemsProperty, FlexWrapProperty } from 'csstype';

export interface BoxStylesProps {
  direction?: FlexDirectionProperty;
  justify?: JustifyContentProperty;
  alignItems?: AlignItemsProperty;
  spaced?: boolean;
  wrap?: FlexWrapProperty;
  width?: string;
}

const useStyles = makeStyles<Theme, BoxStylesProps>(() => {
  return {
    boxRoot: {
      paddingBottom: ({ spaced = false }): string => `${spaced ? '5em' : '0'}`,
      display: 'flex',
      flexDirection: ({ direction = 'row' }): FlexDirectionProperty => direction,
      justifyContent: ({ justify = 'center' }): JustifyContentProperty => justify,
      alignItems: ({ alignItems = 'flex-start' }): AlignItemsProperty => alignItems,
      flexWrap: ({ wrap = 'nowrap' }): FlexWrapProperty => wrap,
      width: ({ width = '100%' }): string => width,
    },
  };
});

export default useStyles;
