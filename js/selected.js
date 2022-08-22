function playersName(nameId) {
    const playerName = document.getElementById(nameId);
    const name = playerName.innerText;
    return name;
}

function selectedList(name) {
    const selectedContainer = document.getElementById('selected-container');
    const li = document.createElement('li');
    li.innerText = name;
    selectedContainer.appendChild(li);
    return name;
}

function DisableNextButton(btnId) {
    document.getElementById(btnId).disabled = 'true';
    document.getElementById(btnId).style.backgroundColor = "gray";
}

// event handler added 

document.getElementById('btn-messi').addEventListener('click', function () {

    const name = playersName('name-messi');
    selectedList(name);
    DisableNextButton('btn-messi');

})
document.getElementById('btn-neymer').addEventListener('click', function () {

    const name = playersName('name-neymer');
    selectedList(name);
    DisableNextButton('btn-neymer');

})
document.getElementById('btn-mbappe').addEventListener('click', function () {

    const name = playersName('name-mbappe');
    selectedList(name);
    DisableNextButton('btn-mbappe');

})
document.getElementById('btn-ramos').addEventListener('click', function () {

    const name = playersName('name-ramos');
    selectedList(name);
    DisableNextButton('btn-ramos');

})
document.getElementById('btn-sunches').addEventListener('click', function () {

    const name = playersName('name-sunches');
    selectedList(name);
    DisableNextButton('btn-sunches');

})
document.getElementById('btn-dmaria').addEventListener('click', function () {

    const name = playersName('name-dmaria');
    selectedList(name);
    DisableNextButton('btn-dmaria');

})
document.getElementById('btn-vitor').addEventListener('click', function () {

    const name = playersName('name-vitor');
    selectedList(name);
    DisableNextButton('btn-vitor');

})
document.getElementById('btn-marcelo').addEventListener('click', function () {

    const name = playersName('name-marcelo');
    selectedList(name);
    DisableNextButton('btn-marcelo');

})
document.getElementById('btn-cr7').addEventListener('click', function () {

    const name = playersName('name-cr7');
    selectedList(name);
    DisableNextButton('btn-cr7');

})