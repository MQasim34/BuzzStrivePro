

export const getBlogcontent = async() => {

    const response  = await fetch('./src/constant/bolgContent/data.json');
    const data = await response.json();
  return data; 
}
