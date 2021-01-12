import axios from "axios";

export const getAllWeaponsAsync = () => axios.get(`/weapons`)

export const getWeaponByIdAsync = (id) => axios.get(`/weapons/${id}`)
