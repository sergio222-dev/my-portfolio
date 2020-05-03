import React, { useState } from 'react';
import ToggleGroup from './index';
import useImageButton from '../ButtonTypes/image';
import ToggleButton, { Prop as ToggleButtonProps } from '../ToggleButton';
import esFlag from '../../../assets/img/es_flag.png';
import enFlag from '../../../assets/img/en_flag.png';

export default {
  title: 'Button ToggleGroup',
  component: ToggleGroup,
};

const ToggleStoryWrapper: React.FunctionComponent = () => {
  const n = 3;
  return (
    <ToggleGroup defaultValue={0}>
      {[0, 1, 2, 3, 4].map(i => (
        <ToggleButton value={i} key={i}>
          Group Text Select
        </ToggleButton>
      ))}
    </ToggleGroup>
  );
};

const ToggleWithImage: React.FunctionComponent<ToggleButtonProps> = props => {
  const classes = useImageButton();
  return (
    <ToggleButton {...props} classes={classes}>
      {props.children}
    </ToggleButton>
  );
};

export const defaultToggle = () => <ToggleStoryWrapper />;

export const withImage = () => (
  <ToggleGroup defaultValue={'es'}>
    <ToggleWithImage value={'es'}>
      <img src={esFlag} />
    </ToggleWithImage>
    <ToggleWithImage value={'en'}>
      <img src={enFlag} />
    </ToggleWithImage>
  </ToggleGroup>
);
