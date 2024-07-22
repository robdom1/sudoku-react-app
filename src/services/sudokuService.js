import axios from 'axios'

const URL = "http://127.0.0.1:5000"


export const getSudoku = async (dif) => {
    console.log(URL + `/generate/${dif}`)
    try {
        const response = await axios.get(URL + `/generate/${dif}`)
        const data = await response.data

        return data
    } catch (error) {
        console.error(error.message);
        return null;
    }

}