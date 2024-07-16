import { hideModal, showModal } from '../renderModal/render-modal';
import './render-add-button.css';


export const renderAddButton = (element)=>{
    const addButton =document.createElement('button');
    addButton.classList.add('botonFlotante');
    addButton.innerText = '+';

    addButton.addEventListener('click',()=>{
        showModal();
    })

    // const divForm = document.querySelector('.modal-container')
    // divForm.addEventListener('click',()=>{
    //     hideModal();
    // })

    element.append(addButton);
}