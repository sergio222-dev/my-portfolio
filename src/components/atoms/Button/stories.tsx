import React from 'react';
import Button from './index';
import Typography from '../Typography';

const text = 'Button Name';

export default {
  title: 'Button',
  component: Button,
};

export const defaultButton = () => (
  <Button>
    <Typography variant={'body1'} title>
      {text}
    </Typography>
  </Button>
);

export const rounded = () => (
  <Button variants={'rounded'}>
    <Typography variant={'body1'} title>
      {text}
    </Typography>
  </Button>
);
