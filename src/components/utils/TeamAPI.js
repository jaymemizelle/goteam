import axios from "axios";


    async function getTeamMembers() {

      let res = await axios.get('https://randomuser.me/api/');
    
      let data = res.data.results;
      console.log(data);
    }
    

export default getTeamMembers;
