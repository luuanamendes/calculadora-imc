const form = document.getElementById('form');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');

    let description = '';

    document.getElementById('info').classList.remove('hidden');

    if (imc < 18.5) {
        description = 'Abaixo do peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        description = 'Peso ideal!';
    } else if (imc > 25 && imc <= 30) {
        description = 'Sobrepeso!'
    } else if (imc > 30 && imc <= 35) {
        description = 'Obesidade!';
    } else if (imc > 35 && imc <= 40) {
        description = 'Obesidade grau II';
    } else {
        description = 'Obesidade grau III';
    }

    value.textContent = imc.replace('.', ',');

    document.getElementById('description').textContent = description;
});