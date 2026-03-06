const getHashTable = <T, K>(array: Array<T>, key: keyof T, extraKey?: (x: K) => number) => {
  const hashTable = new Map<string, T>();

  for (const [_idx, value] of array.entries()) {
    // @ts-ignore
    hashTable.set(extraKey ? String(extraKey(value[key])) : value[key], value);
  }

  return hashTable;
};

export default getHashTable;
