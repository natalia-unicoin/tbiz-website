const checkObjectOnProps = (
  entry: Record<string, unknown>,
  propsList: string[],
  requiredAll = false,
) => {
  if (Reflect.ownKeys(entry)?.length === 0) {
    return false;
  }

  return propsList[requiredAll ? 'every' : 'some'](
    (propItem) => Reflect.has(entry, propItem),
  );
};

export default checkObjectOnProps;
