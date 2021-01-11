import axios from "axios";

export const getAllMercsAsync = () => axios.get(`/mercs`)

export const updateMercWeaponAsync = (idMerc, idWeapon) => axios.put(`/mercs/weapons`, { idMerc, idWeapon })

export const createMercAsync = (nickname, legalAge) => axios.post(`/mercs`, { nickname, legalAge })
