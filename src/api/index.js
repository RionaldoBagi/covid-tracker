import axios from "axios";

const urlGlobal = "https://covid19.mathdro.id/api";
const urlIndonesia = "https://indonesia-covid-19.mathdro.id/api";

export const DataGlobal = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths },
    } = await axios.get(urlGlobal);
    return { confirmed, recovered, deaths };
  } catch (error) {
    console.log(error);
  }
};

export const DataIndonesia = async () => {
  try {
    const {
      data: { jumlahKasus: confirmed, meninggal: deaths, sembuh: recovered },
    } = await axios.get(urlIndonesia);
    return { confirmed, recovered, deaths };
  } catch (error) {
    console.log(error);
  }
};

export const DataProvinsi = async () => {
  try {
    const {
      data: { data: provinces },
    } = await axios.get(`${urlIndonesia}/provinsi`);
    return provinces.map((provinsi) => ({
      namaProvinsi: provinsi.provinsi,
      confirmed: provinsi.kasusPositif,
      deaths: provinsi.kasusMeninggal,
      recovered: provinsi.kasusSembuh,
    }));
  } catch (error) {
    console.log(error);
  }
};