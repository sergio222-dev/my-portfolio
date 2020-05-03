import clsx from 'classnames';

const useClassNames = (...classKeys: string[]): string => {
  return clsx(...classKeys);
};

export default useClassNames;
