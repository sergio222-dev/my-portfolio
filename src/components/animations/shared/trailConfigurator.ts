import React from 'react';
// import { useRef } from 'react';
// import { SpringHandle, useTrail, UnknownProps } from 'react-spring';
// import { ParametersTrails, ReturnConfigTypeArray } from './index';
//
// const useTrailConfigurator = <Props extends UnknownProps>({
//   parameters,
//   withRef = false,
//   config,
//   num,
// }: ParametersTrails<Props>): ReturnConfigTypeArray<Props> => {
//   const ref = useRef<SpringHandle>(null);
//   const parametersWithRef = withRef ? { ...parameters, ref } : parameters;
//   const parametersWithConfig = config ? { ...parametersWithRef, config } : parametersWithRef;
//   const trails = useTrail<Props>(num, parametersWithConfig);
//
//   return [trails, withRef ? ref : undefined];
// };
//
// export default useTrailConfigurator;
