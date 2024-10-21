if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', loaded)
}
else{
    loaded()
}

let groceryList = [];

function loaded(){
    let addItems = document.getElementsByClassName('btn-add-item')[0];
    addItems.addEventListener('click', addItem);
    buttonOptions();
}

function buttonOptions(){
    let buttons = document.getElementsByClassName('button');
    for(i = 0; i < buttons.length; i++){
        let button = buttons[i];
        button.addEventListener('click', () => {
            let value = button.value;
            let display = document.getElementsByClassName('groceryItems')[0];
            display.innerHTML = '';

            if(value === 'purchased'){
                groceryList.forEach(item => {
                    if (item.classList.contains('purchased')){
                        display.appendChild(item)
                    }
                });
            }
            else if(value === 'unpurchased'){
                groceryList.forEach(item => {
                    if(item.classList.contains('unpurchased')){
                        display.appendChild(item);
                    }
                });
            }
            else{
                groceryList.forEach(item => {
                    display.appendChild(item);
                });
            }    
        });
    }
};



function addItem(){
    let itemInput = document.getElementsByClassName('item-input')[0].value
    let display = document.getElementsByClassName('groceryItems')[0];
    let listItemElement = document.createElement('li');
    listItemElement.className = "unpurchased listItem";
    listItemElement.innerText = itemInput;

    groceryList.push(listItemElement);
    
    listItemElement.addEventListener('click', () => {
        let text = listItemElement.innerText;
            let html = `<s>${text}</s>`
            if(listItemElement.innerHTML == html){
                listItemElement.innerHTML = `${text}`;
                listItemElement.className = "unpurchased listItem";
            }
            else{
                listItemElement.innerHTML = `<s>${text}</s>`;
                listItemElement.className = "purchased listItem";
            }
    });
    display.append(listItemElement);
}