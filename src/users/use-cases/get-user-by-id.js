import { localhostUserToModel } from "../mappers/localhost-user.mapper";


export const getUserById = async ( id )=>{

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const respuesta = await fetch(url);
    const data = await respuesta.json();

    const user = localhostUserToModel(data);

    // console.log(user);

    return user;
}