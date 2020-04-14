import { useSpring } from 'react-spring';

interface AnimationParameters<Props> {
  props: Props;
  ref: boolean;
  config: {};
}

interface Animation<Props> {
  (parameters: AnimationParameters<Props>): void;
}
