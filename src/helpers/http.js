import axios from "axios";
import { APILOCAL, APIPROD } from "../../constants";

export default axios.create({
  baseURL: 
  // APIPROD,
  APILOCAL
});
