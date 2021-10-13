import axios from 'axios'
const instance =axios.create({
    baseURL:"http://ddragon.leagueoflegends.com/cdn/11.20.1/",
});
export default instance;