import axios from "axios";

export const getAllMercs = () => axios.get(`/mercs`)

export const editMercWeapon = (mercId, weaponId) => axios.put(`/mercs/weapons/${mercId}/${weaponId}`)

export const createNewMerc = (nickname, age) => axios.post(`/mercs/${nickname}/${age}`)