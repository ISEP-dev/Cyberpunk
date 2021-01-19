import axios from "axios";

export const getAllMercsAsync = () => axios.get(`/mercs`)

export const getMercByIdAsync = (idMerc) => axios.get(`/mercs/${idMerc}`).then(res => res.data)

export const updateMercWeaponAsync = (idMerc, idWeapon) => axios.put(`/mercs/weapons`, { idMerc, idWeapon })

export const createMercAsync = (nickname, legalAge) => axios.post(`/mercs`, { nickname, legalAge })

export const killMercAsync = (idMerc) => axios.delete(`/mercs`, { data: { idMerc } })
