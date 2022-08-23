function inputField(idName) {
    const inputField = document.getElementById(idName);
    const expenceString = inputField.value
    const expence = parseFloat(expenceString);
    if (isNaN(expence)) {
        alert('please enter a valid number');
        return;
    }
    return expence;
}

document.getElementById('btn-calculate').addEventListener('click', function () {

    const selectedContainer = document.getElementById('selected-container')
    const selectedName = selectedContainer.childElementCount;
    const playerExpence = inputField('pp-input-field') * selectedName;


    const playerExpenceField = document.getElementById('expence');
    playerExpenceField.innerText = playerExpence;

})

// 
document.getElementById('btn-total-calculate').addEventListener('click', function () {

    const playerExpenceField = document.getElementById('expence');
    const playerExpenceString = playerExpenceField.innerText;
    const playerExpence = parseFloat(playerExpenceString);
    playerExpenceField.innerText = playerExpence;

    // manager
    const managerExpence = inputField('mng-input-field');

    // coach
    const coachExpence = inputField('coach-input-field');

    // total
    const totalField = document.getElementById('total');
    const totalString = totalField.innerText;
    const total = parseFloat(totalString);
    totalField.innerText = total;


    // totat expence
    const totalExpence = playerExpence + managerExpence + coachExpence + total;
    totalField.innerText = totalExpence;
})