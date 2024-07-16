import { User } from "../models/user";
import { loadUsers } from "../use-cases/load_users"


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async ()=>{
    const users  = await loadUsers(state.currentPage + 1);
    const users2 = await loadUsers(state.currentPage + 2);
    // console.log(users);
    // console.log(users2);


    

    if(state.users.length === 0){
        state.currentPage +=1;
        state.users = users;
        // console.log(state.users);
        // console.log("======================");
        return
    }

    if(users[0].id === users2[0].id){
        state.currentPage +=1;
        state.users = users;
        const nextButton = document.getElementById('nextButton');
        nextButton.disabled =true;

        return
    }

    if(users[0].id !== users2[0].id){
        state.currentPage +=1;
        state.users = users;

        const buttonprev = document.getElementById('prevButton');
        buttonprev.disabled = false;

        return
    }

    
    
}

const loadPreviusPage = async ()=>{
    
    if(state.currentPage === 1){
        console.log(state.currentPage);
        const buttonprev = document.getElementById('prevButton');
        buttonprev.disabled = true;

        return
    }
    if(state.currentPage > 1){
        const users = await loadUsers(state.currentPage -1)
        state.currentPage -=1;
        state.users = users
        const nextButton = document.getElementById('nextButton');
        nextButton.disabled =false;
        
        return
    }

}

/**
 * 
 * @param {User} user 
 */
const onUserChange = async (updatedUser)=>{

    let wasFound = false
    state.users = state.users.map(user=>{
        if(user.id===updatedUser.id){
            wasFound = true
            return updatedUser;
        }
        return user;
    })

    if(state.users.length<10 && !wasFound){
        state.users.push( updatedUser );
    }
}

const reloadPage = async ()=>{
    const users = await loadUsers(state.currentPage)
    if(state.users.length === 0)return;
    state.users = users;
}

export default{
    loadNextPage,
    loadPreviusPage,
    onUserChange,
    reloadPage,

    getUsers: ()=>[...state.users],
    getCurrentPage: ()=>state.currentPage
}