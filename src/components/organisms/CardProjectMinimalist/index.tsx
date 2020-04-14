import React, { FunctionComponent, useState } from 'react';
import { animated, useChain } from 'react-spring';
import styles, { StylesProps } from './styles';
import TextTypo from '../../molecules/Typography/TextTypo';
import useMove from '../../animations/Move/moveSpring';
import useFade from '../../animations/Fade/fadeSpring';
import useMoveTrail from '../../animations/Move/moveTrail';
import { Grid } from '@material-ui/core';
import TitleTypo from '../../molecules/Typography/TitleTypo';
import IconAvatar from '../../molecules/IconAvatar';
import { GitHub, Web } from '@material-ui/icons';

const AnimationContainer = animated('div');

interface CardProjectProps extends StylesProps {
  title: string;
  repoLink: string;
  demoLink: string;
}

type Props = CardProjectProps;

const CardProjectMinimalist: FunctionComponent<Props> = ({ img, title, children, demoLink, repoLink }) => {
  const stylesClass = styles({ img });

  /*
  Animations
   */
  const [animate, set] = useState(false);
  const [moveProps, movePropsRef] = useMove({ animate, to: 0, direction: 'up', from: 100 });
  const [movePropsText, moveRef] = useMove({ animate, to: 0, direction: 'up', from: 1 });
  const [moveImg, moveImgRef] = useMove({ animate, to: -20, direction: 'left', from: 0 });
  const [fadeProps] = useFade({ from: 0, to: 1, animate });
  const [trails] = useMoveTrail({ animate, from: 100, to: 0, num: 2 });

  useChain(animate ? [movePropsRef, moveRef, moveImgRef] : [movePropsRef, moveImgRef, movePropsRef], [0, 0.5, 0.5]);
  /*
  End Animations
   */

  return (
    <figure
      className={stylesClass.rootContainer}
      onMouseEnter={(): void => set(true)}
      onMouseLeave={(): void => set(false)}
    >
      <AnimationContainer style={moveImg} className={stylesClass.imageFigure}>
        <img src={img} className={stylesClass.imageFigure} />
      </AnimationContainer>
      <figcaption className={stylesClass.caption}>
        <AnimationContainer className={stylesClass.text} style={{ ...fadeProps, ...movePropsText }}>
          <TextTypo>{children}</TextTypo>
        </AnimationContainer>
        <AnimationContainer style={moveProps} className={stylesClass.title}>
          <Grid container alignItems={'center'}>
            <Grid item xs={8}>
              <TitleTypo>{title}</TitleTypo>
            </Grid>

            <Grid item xs={2}>
              <AnimationContainer style={trails[0]}>
                <IconAvatar size={30} href={repoLink}>
                  <GitHub />
                </IconAvatar>
              </AnimationContainer>
            </Grid>

            <Grid item xs={2}>
              <AnimationContainer style={trails[1]}>
                <IconAvatar href={demoLink} size={30}>
                  <Web />
                </IconAvatar>
              </AnimationContainer>
            </Grid>
          </Grid>
        </AnimationContainer>
      </figcaption>
    </figure>
  );
};

export default CardProjectMinimalist;
