import { useSpring } from 'react-spring';
import { AnimatedProps } from '@react-spring/web';

interface Props {
  from: number;
  to: number;
  animate: boolean;
}

const FadeHook = ({ from, to, animate }: Props): [AnimatedProps<{}>] => {
  const { opacity } = useSpring({ opacity: animate ? to : from });

  return [
    {
      opacity,
    },
  ];
};

export default FadeHook;
