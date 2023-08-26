import axios from "axios";

const BASE_URL = "https://spotify23.p.rapidapi.com/search/";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        'X-RapidAPI-Key': 'a3af791003msh0a1ce7b6f40c506p15e966jsn756e78e98990',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};