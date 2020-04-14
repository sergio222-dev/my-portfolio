import { clsx } from '../clsx';

type ClassObject<T extends string = string> = Partial<Record<T, string>>;
type ClassObjectWithNull<T extends string = string> = Partial<Record<T, string>> | undefined;
type ClassObjectResult<T extends string = string> = Record<T, string>;

function notEmpty<T>(item: T): item is T {
  return item !== undefined && item !== null;
}

export const combineStyles = <ClassKey extends string = string>(
  ...styles: Array<ClassObjectWithNull<ClassKey>>
): ClassObjectResult<ClassKey> => {
  const filteredStyles = styles.filter(notEmpty) as Array<ClassObject<ClassKey>>;

  const result = filteredStyles.reduce<ClassObject<ClassKey>>((acc, v) => {
    const keysAcc = Object.keys(acc);
    const keysV = Object.keys(v);

    const allKeys = Array.from(new Set([...keysAcc, ...keysV])) as Array<keyof ClassObject<ClassKey>>;

    const partialResult: ClassObject<ClassKey> = {};

    allKeys.forEach(k => {
      partialResult[k] = clsx(acc[k], v[k]);
    });

    // const keys = Object.keys(v) as Array<keyof ClassObject<ClassKey>>;
    // keys.forEach(k => {
    //   if (!acc[k] && !v[k]) {
    //     acc[k] = '';
    //   } else if (!acc[k]) {
    //     acc[k] = v[k];
    //   } else {
    //     acc[k] = acc[k] + ' ' + v[k] + undefined;
    //   }
    // });
    return partialResult;
  }, {});

  return result as ClassObjectResult<ClassKey>;
};
