document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayerInputField = document.getElementById('pp-input-field');
    const perPlayerPrice = perPlayerInputField.value;
    const playerExpence = parseFloat(perPlayerPrice * 5);

    const expenceField = document.getElementById('expence');
    const expence = expenceField.innerText;
    const totalExpence = parseFloat(expence) + playerExpence;
    expenceField.innerText = totalExpence;

    perPlayerInputField.value = '';


    console.log(totalExpence);

})
