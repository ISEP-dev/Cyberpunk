import axios from "axios";

export const getAllWeapons = () => axios.get(`/weapons`)
