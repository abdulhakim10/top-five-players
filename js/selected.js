const buttons = document.getElementsByClassName('select-btn');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.siblingsNode
        console.log(event);



    })
}