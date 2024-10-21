function addToList() {
    let input = document.getElementsByClassName('userInput')[0].value;
     let list = document.createElement('li');
    list.textContent = input;
    document.getElementsByClassName('itemList')[0].appendChild(list);
    document.getElementsByClassName('userInput')[0].value = '';
}