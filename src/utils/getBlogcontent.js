import axios from "axios"


export const getBlogcontent = async() => {

  const response = await axios.get('/BuzzStrivePro/public/api/data.json');
  const datas = await response.json();
  console.log(datas);

  return datas;
}