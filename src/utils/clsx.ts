type clsxType<T> = undefined | Array<undefined> | T | Array<T>;

export const clsx = <T = string>(...classArray: Array<clsxType<T>>): string => {
  const filtered = classArray.filter(c => c !== undefined);
  const deArrayed = filtered.map(c => (Array.isArray(c) ? clsx(c) : c));
  return deArrayed.join(' ');
};
