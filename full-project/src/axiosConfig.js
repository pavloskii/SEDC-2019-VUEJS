import axios from "axios";

export const apiKey = "AIzaSyB1ARKS3igo5rM5BPPByIJYyEgm_v2WjRs";

export const axiosData = axios.create({
  baseURL: "https://sedc-ads.firebaseio.com",
  timeout: 5000
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
});

export const axiosAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  timeout: 5000
});
