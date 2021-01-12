import axios from "axios";

export const getAllWeaponsAsync = () => axios.get(`/weapons`)
