import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (countries) => {
    let changeableUrl = url;
  
    if (countries) {
      changeableUrl = `${url}/countries/${countries}`;
    }
    try { const { data:{confirmed,recovered,deaths,} } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths};
    }
    catch (error) {return error;}
  };
  export const fetchCountries = async () => {
    try { const { data: { countries } } = await axios.get(`${url}/countries`);
    return countries.map((countries) => countries.name);
    }
    catch (error) { return error;}
  };
  export const fetchFirstCountries = () => {
    try { return fetch(`${url}/countries`).then(res => res.json()).then(data => data.countries[0].name)
    }
    catch (error) {return error;}
}