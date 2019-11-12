export const getFromServer = async (url) => {
  const response = await fetch(url);    
  const data = await response.text();
  let result = atob(data)
  return JSON.parse(result.split(','));
};