export const copyOf = (obj: object | Array<any>) => {
  return JSON.parse(JSON.stringify(obj));
};

export const deleteFromObject = (obj: object, property: string) => {
  if (obj && Object.keys(obj).length) {
    const nextObject = copyOf(obj);
    delete nextObject[property];
    return nextObject;
  }
  return {};
};
