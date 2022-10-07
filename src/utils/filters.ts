export const filterBy = (objectsArray: Array<any>, properties?: any) => {
  const nextObjectsArray: Array<any> = [];

  if (!properties && !Object.keys(properties).length) {
    return objectsArray;
  }

  Object.keys(properties).forEach((property: string) => {
    objectsArray.forEach((item: any) => {
      const itemProperty = JSON.stringify(item[property]).toUpperCase();
      const propertyValue = properties[property].toString().toUpperCase();
      const existInNextArray = nextObjectsArray.find(
        (e: any) => JSON.stringify(e) === JSON.stringify(item)
      );

      if (itemProperty.includes(propertyValue)) {
        if (!existInNextArray) nextObjectsArray.push(item);
      }
    });
  });

  return nextObjectsArray;
};
