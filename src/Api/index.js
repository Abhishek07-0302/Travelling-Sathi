import axios from "axios";

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';




export const getPlacesData = async(sw,ne) => {

    try{
        const {data:{data }} = await axios.get(URL, {

          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '220be4df75msh15da7ada653789fp1f22d4jsn1bbb29436ccc',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }
    catch(error){
        console.log(error);
    }

}