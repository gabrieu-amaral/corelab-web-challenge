import axios from "axios";
import { IVehicle } from "../types/Vehicle";

const API = "http://localhost:3333";


export const getVehicles = async () => {
  return axios.get(API+"/vehicles");
};

export const postVehicle = async (data:any) => {
  return axios.post(API+"/vehicles", data)
}

export const favoriteVehicle = async (data:any) => {
  return axios.post(API+"/favorite/" + data)
}
export const deleteVehicle = async (data:any) => {
  return axios.delete(API+"/vehicles/"+ data)
}
export const editVehicle = async (data:any,id:any) => {
  return axios.put(API+"/vehicles/"+ id, data)
}