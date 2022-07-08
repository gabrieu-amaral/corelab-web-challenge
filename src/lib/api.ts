import axios from "axios";
import { IVehicle } from "../types/Vehicle";

const API = "http://localhost:3333";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
  return fetch(endpoint(path)).then((res) => res.json());
};

export const getVehicles = async () => {
  return get("/vehicles");
};

export const postVehicle = async (data:IVehicle) => {
  return axios.post(API+"/vehicles", data)
}