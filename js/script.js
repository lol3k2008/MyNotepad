const btn_add = document.querySelector(`.addNewNote`);
const btn_delAllNote = document.querySelector(`.delAllNote`);

const popup_add_note = document.querySelector(`.heroImg`);
const popup_add_btn_anuluj = document.querySelector(`.btn_add_anuluj`);
const popup_add_btn_ok = document.querySelector(`.btn_add_ok`);

const popup_add_input = document.querySelector(`.input_add`);
const selected = document.querySelector(`.select`);




const noteArea = document.querySelector(`.noteArea`);

let allNote;
let id = 0;
let btn_del;




const createNewNote = () =>{
    if(popup_add_input.value !== '' && select.value !== "none"){
const newNote = document.createElement(`div`);
noteArea.appendChild(newNote);
newNote.classList.add('note');
id++;
newNote.setAttribute(`id`,`note-${id}`)
newNote.innerHTML = `

<span class="margin">
<p>${select.value}</p>
<button class="btn_del"><i class="fas fa-backspace"></i></button>
</span>
<div class="content">${popup_add_input.value}
</div>

`

showAndHidePopupAdd()


}else{
    alert(`Podaj treść notatki! i wybierz kategorie...`)
}
}

const showAndHidePopupAdd = () =>{
    popup_add_note.classList.toggle(`show_popup_add`);
    popup_add_input.value = "";
select.value = "none";
}

const deleteNote = e =>{
    if(e.target.closest(`button`)){
        e.target.closest(`div`).remove();
        console.log(`ok`);
    }
}

const deleteAllNote = () =>{
    allNote = document.querySelectorAll(`.note`);
allNote.forEach(el => {
    el.remove();

});
}


btn_add.addEventListener(`click`, showAndHidePopupAdd);
popup_add_btn_anuluj.addEventListener(`click`, showAndHidePopupAdd);
popup_add_btn_ok.addEventListener(`click`, createNewNote);
noteArea.addEventListener(`click`, deleteNote);
btn_delAllNote.addEventListener(`click`, deleteAllNote);

