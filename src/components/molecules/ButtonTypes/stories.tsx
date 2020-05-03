import React from 'react';
import ButtonTypes from './index';
import useImageButton from './image';
import esFlag from '../../../assets/img/es_flag.png';

const text = 'Button Name';

export default {
  title: 'Button Types',
  component: ButtonTypes,
};

const ButtonWithImage = () => {
  const imageButton = useImageButton();
  return (
    <ButtonTypes classes={imageButton}>
      <img src={esFlag} />
    </ButtonTypes>
  );
};

export const defaultButton = () => <ButtonTypes>{text}</ButtonTypes>;
export const buttonImage = () => <ButtonWithImage />;
