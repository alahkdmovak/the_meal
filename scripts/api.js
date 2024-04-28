export const getData = async (url) => {
  const response = await axios.get(url).catch((error) => console.log(error));
  console.log(response.data.meals);
  return response.data.meals;
};
