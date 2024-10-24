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

    let removeItems = document.getElementsByClassName('btn-reset-item')[0];
    removeItems.addEventListener('click', removeItem)

    buttonOptions();
}

function buttonOptions(){
    let buttons = document.getElementsByClassName('btn');
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
    let itemInput = document.getElementsByClassName('item-input')[0].value.trim();
    if(!itemInput){
        return;
    }
    
    let display = document.getElementsByClassName('groceryItems')[0];
    let listItemElement = document.createElement('li');
    let hRuleElement = document.createElement('hr');
    let divElement = document.createElement('div');

    divElement.className = "unpurchased listItem";
    listItemElement.className = "lI"
    listItemElement.innerText = itemInput;

    groceryList.push(divElement);
    
    divElement.addEventListener('click', () => {
        let text = divElement.innerText;
        let listItem = divElement.getElementsByClassName('lI')[0];
            let html = `<s>${text}</s>`
            if(listItem.innerHTML == html){
                listItem.innerHTML = `${text}`;
                divElement.className = "unpurchased listItem";
            }
            else{
                listItem.innerHTML = `<s>${text}</s>`;
                divElement.className = "purchased listItem";
            }
    });
    divElement.append(listItemElement);
    divElement.append(hRuleElement);
    display.append(divElement);
}

function removeItem(){
    let display = document.getElementsByClassName('groceryItems list2')[0];
    display.innerHTML = '';
    groceryList = [];
}