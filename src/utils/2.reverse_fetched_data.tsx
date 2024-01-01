export const reverse_fetched_data = async (intialData: any) => {
  let data: any[] = [];
  Object.keys(intialData).map((key) => {
    data.push({...intialData[key], id: key});
  });
  const finalData = data.reverse();
  return finalData;
};
