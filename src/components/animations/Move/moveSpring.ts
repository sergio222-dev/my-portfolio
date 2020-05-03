// import { AnimationHook, BasicParameters } from '../shared/index.legacy';
// import useSpringConfigurator from '../shared/springInit';
import { useSpring, SpringHandle } from 'react-spring';
import { RefObject, useRef } from 'react';
import { AnimatedProps } from '@react-spring/web'

type directionType = 'up' | 'down' | 'left' | 'right';

interface Props {
  direction: directionType;
  to: number;
  from: number;
  animate: boolean;
}

const calcDir = (dir: directionType): ((n: number) => string) => {
  const cord = dir === 'up' || dir === 'down' ? 0 : 1;
  return (amount: number): string => {
    const value = `${amount}%`;
    return cord ? `translate(${value}, 0)` : `translate(0,${value})`;
  };
};

/**
 * Hook for animations movements with translate
 */
const useMove = ({ animate, to, direction, from }: Props): [AnimatedProps<{}>, RefObject<SpringHandle>] => {
  const ref = useRef<SpringHandle>(null);
  const { t } = useSpring<{ t: number }>({
    t: animate ? to : from,
    ref,
  });
  const calcTranslate = calcDir(direction);

  return [{ transform: t.to<string>((v: number) => calcTranslate(v)) }, ref];
};

export default useMove;
