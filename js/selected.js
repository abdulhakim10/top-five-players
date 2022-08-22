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

