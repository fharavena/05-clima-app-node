const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=483ad0ba3a3de05b5119c1745c6e1d75`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}