import { clsx } from './clsx';

interface ObjectString {
  [index: string]: string;
}

/**
 * soruce: https://stackoverflow.com/questions/54520676/in-typescript-how-to-specify-only-keys-of-a-generic-object-whose-values-are-stri
 */
type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

function getAllKeys<T>(o: T[]): KeysMatching<T, string>[] {
  const keys: KeysMatching<T, string>[] = [];
  o.forEach((obj: T) => {
    const keysString = Object.keys(obj) as KeysMatching<T, string>[];
    keys.push(...keysString);
  });
  return keys;
}

function noDuplicatedValue<T>(keys: KeysMatching<T, string>[]): KeysMatching<T, string>[] {
  const keysOnce: Set<keyof T> = new Set<keyof T>();
  keys.forEach((k: keyof T) => {
    keysOnce.add(k);
  });
  const arr = Array.from(keysOnce.values());
  return arr as KeysMatching<T, string>[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tany = any;

export function combineClassesObjects<T>(...objectsWithClasess: Array<T | undefined>): T {
  const allObjects: T[] = objectsWithClasess.filter(o => typeof o !== 'undefined') as T[];

  const allKeys = getAllKeys<T>(allObjects);
  const keys = noDuplicatedValue<T>(allKeys);

  const resultObject: Tany = {};

  keys.forEach((currentKey: keyof T) => {
    if (typeof resultObject[currentKey] === 'undefined') {
      resultObject[currentKey] = '';
    }
    allObjects.forEach((cls: T) => {
      if (typeof cls[currentKey] !== 'undefined') {
        resultObject[currentKey] = clsx(resultObject[currentKey], cls[currentKey]);
      }
    });
  });

  return resultObject;
}
