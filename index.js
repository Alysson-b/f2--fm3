const input = document.getElementById('inputName');
const btn = document.getElementById('button');
const div = document.getElementById('result');

btn.addEventListener('click', function() {
    const inputValue = input.value.trim();
    
    if(inputValue === ''){
        alert('Insira valores')
    }
    else{
    const resultado = conferirName(inputValue);
    div.innerText = resultado;
    div.style.display = 'flex'
    }
})

function conferirName(str) {
   
    const nome = str.replace(/\s+/g, '').toLowerCase();
    const frequencia = {};

    for (let char of nome) {
        if (frequencia[char]) {
            frequencia[char]++;
        } else {
            frequencia[char] = 1;
        }
    }

    const valores = Object.values(frequencia);
    const primeiroValor = valores[0];

    return valores.every(valor => valor === primeiroValor);
}
