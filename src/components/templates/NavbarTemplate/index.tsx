import React, { FunctionComponent, useEffect, useState } from 'react';
import useMove from '../../animations/Move/moveSpring';
import useScroll from '../../shared/Hooks/useScroll';
import { animated, config } from 'react-spring';
import Index from '../../atoms/Containter';

const NavbarTemplate: FunctionComponent = ({ children }) => {
  const { scrollDirection } = useScroll();
  const [animate, set] = useState(false);
  const [move] = useMove({ animate, from: -100, to: -10, direction: 'down' });
  useEffect(() => {
    set(scrollDirection === 'up' ? false : true);
  }, [scrollDirection]);
  return (
    <animated.div style={{ position: 'fixed', top: '0', left: '0', zIndex: 2, ...move }}>
      <Index>{children}</Index>
    </animated.div>
  );
};

export default NavbarTemplate;
