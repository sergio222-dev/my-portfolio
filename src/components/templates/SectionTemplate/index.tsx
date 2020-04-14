import React, { FunctionComponent } from 'react';
import styles, { SectionStylesProps } from './styles';
import clsx from 'classnames';
import Container from '../../atoms/Containter';

const SectionTemplate: FunctionComponent<{ className?: string } & SectionStylesProps> = ({
  children,
  className,
  color,
}) => {
  const stylesClass = styles({ color });
  return (
    <section className={clsx(className, stylesClass.sectionTemplateRoot)}>
      <Container className={stylesClass.containerResponsive}>{children}</Container>
    </section>
  );
};

export default SectionTemplate;
