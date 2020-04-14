import React from 'react';
import Typography from './index';

const text = 'Main text, learn typescript please';

export default {
  title: 'Typography',
  component: Typography,
};

export const defaultP = () => <Typography>{text}</Typography>;
export const weight = () => <Typography weight={'bold'}>{text}</Typography>;
export const secondaryFont = () => <Typography type={'secondary'}>{text}</Typography>;
export const title = () => <Typography title>{text}</Typography>;
export const h1 = () => <Typography variant={'h1'}>{text}</Typography>;

h1.story = {
  name: 'h1',
};
