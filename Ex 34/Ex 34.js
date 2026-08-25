


const List = document.querySelector('.list');


function addItem(){
const add = document.createElement('li');
add.textContent = 'Item One';
List.appendChild(add)
}

function removeItem(){
    if(List.lastChild){
            List.removeChild(List.lastChild);
    }else{
        alert("Nagu kala wad");
    }
}