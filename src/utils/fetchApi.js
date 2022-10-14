import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'X-RapidAPI-Key': '0208c214fcmsh4631867a8521035p110408jsnd731c3dc2755',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    });
    
    return data;
  } catch (error) {
    console.log(error);
  }
};
