import axios from "axios";

//A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.
const BASEURL = "https://randomuser.me/api/?results=100";

export default {
  getEmployee: function() {
      
    return axios.get(BASEURL);
  }
};