const convertData = (data, type) => {
  const convertedData = data[type].map((item) => {
    return {
      id: item[0],
      [type]: item[1],
    };
  });
  return convertedData;
};

export { convertData };
