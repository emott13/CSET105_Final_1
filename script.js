if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', loaded)
}
else{
    loaded()
}

function loaded(){
    let addItems = document.getElementsByClassName('btn-add-item')[0];
    addItems.addEventListener('click', addItem);
};

function addItem(){
    let itemInput = document.getElementsByClassName('item-input')[0].value
    let display = document.getElementsByClassName('groceryItems')[0];
    let listItemElement = document.createElement('li');
    listItemElement.className = "listItem";
    listItemElement.innerText = itemInput;

    listItemElement.addEventListener('click', () => {
        let text = listItemElement.innerText;
            let html = `<s>${text}</s>`
            if(listItemElement.innerHTML == html){
                listItemElement.innerHTML = `${text}`;
                listItemElement.id = "unpurchased";
            }
            else{
                listItemElement.innerHTML = `<s>${text}</s>`;
                listItemElement.id = "purchased";
            }
    });
    display.append(listItemElement);
}