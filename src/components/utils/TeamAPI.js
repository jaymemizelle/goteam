import axios from "axios";


    async function getTeamMembers() {

      let res = await axios.get('https://randomuser.me/api/?results=10');
    
      let data = res.data.results;
      console.log(data);
    }
    

export default getTeamMembers;
