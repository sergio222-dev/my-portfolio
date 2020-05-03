import { useTrail } from 'react-spring';
import { RefObject, useRef } from 'react';
import { AnimatedProps } from '@react-spring/web';

interface Props {
  animate: boolean;
  from: number;
  to: number;
  num: number;
}

const useMoveTrail = ({ animate, from, to, num }: Props): [AnimatedProps<{}>[], RefObject<any>] => {
  const ref = useRef(null);
  const trails = useTrail<{ t: number }>(
    num,
    {
      t: animate ? to : from,
      ref,
    },
    [animate],
  );

  return [
    trails.map(({ t }) => {
      return {
        transform: t.to<string>((v: number) => `translate(0, ${v}%)`),
      };
    }),
    ref,
  ];
};

export default useMoveTrail;
