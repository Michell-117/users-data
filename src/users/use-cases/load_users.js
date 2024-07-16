import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";


/**
 * 
 * @param {Number} page 
 * @returns {Promise< User[] >}
 */
export const loadUsers = async (page=1)=>{
    try {
        const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${page}`;

        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
    
        // console.log(data.data);

        const users2 = [];
        for (const user of data.data) {
            users2.push(localhostUserToModel(user))
        }
        // console.log(users2);

        const users = data.data.map(user=>localhostUserToModel(user))
        // console.log(users);

        return users

    } catch (error) {
        throw new Error('Error con la conexion')
    }
}