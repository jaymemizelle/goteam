import axios from "axios";


    async function teamMembers() {

      let res = await axios.get('https://randomuser.me/api/');
    
      let data = res.data.results;
      console.log(data);
    }
    
teamMembers();

export default teamMembers;
