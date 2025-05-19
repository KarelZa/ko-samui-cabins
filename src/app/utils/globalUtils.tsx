/* eslint-disable react/display-name */
import React, { FC } from 'react';

/**
 * Creates an implementation of a component using a View and a Controller hook
 * @param View A view component
 * @param useHook A controller hook, can be parametrized with an object parameter
 *
 * Any parameters passed to controller will be passed as props to the resulting component
 */
export const wrap = <P extends object, HProps = object>(
  View: FC<P>,
  useHook: (props: HProps) => P,
): FC<HProps> => {
  return (props: HProps) => {
    const hookProps = useHook(props);
    return <View {...hookProps} />;
  };
};
