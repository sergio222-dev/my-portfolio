import React from 'react';
// import { useRef, RefObject } from 'react';
// import { SpringConfiguratorFunction } from './index';
// import { useSpring, SpringHandle, SpringValues, UnknownProps, UseSpringProps, SpringConfig } from 'react-spring';
//
// const useSpringConfigurator = <Props extends UnknownProps>(
//   config: UseSpringProps<Props>,
//   withRef = false,
//   configuration?: SpringConfig,
// ): [SpringValues<Props>, RefObject<SpringHandle>] => {
//   const ref = useRef<SpringHandle>(null);
//   const configWitRef = withRef ? { ...config, ref } : config;
//   const configWithConfiguration = configuration ? { ...configWitRef, config: configuration } : configWitRef;
//   const spring = useSpring<Props>(configWithConfiguration);
//
//   return [spring, ref];
// };
//
// export default useSpringConfigurator;
