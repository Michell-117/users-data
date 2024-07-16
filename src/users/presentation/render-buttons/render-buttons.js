import usersStore from '../../store/users-store'
import { RenderTable } from '../render-table/render-table';
import './render-buttons.css';



export const renderButtons = (element)=>{
    const nextButton = document.createElement('button');
    nextButton.id = 'nextButton';
    nextButton.innerText = " Next >";
    nextButton.addEventListener('click',async()=>{
        await usersStore.loadNextPage();
        currentPageLabel.innerText = `${ usersStore.getCurrentPage() }`
        RenderTable(element);
    });


    const prevButton = document.createElement('button');
    prevButton.id = 'prevButton';
    prevButton.innerText = "< Prev ";
    prevButton.disabled=true
    prevButton.addEventListener('click',async ()=>{
        await usersStore.loadPreviusPage();
        currentPageLabel.innerText = `${usersStore.getCurrentPage()}`;
        RenderTable(element);
    });

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'currentPage'
    currentPageLabel.innerText = `${ usersStore.getCurrentPage() }`;

    element.append( prevButton, currentPageLabel, nextButton );
}