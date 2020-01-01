import axios from "axios";

const BaseService = axios.create({
  baseURL: "https://react-burger-68300.firebaseio.com/"
});

export default BaseService;
