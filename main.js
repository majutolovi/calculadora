let display = document.getElementById('result');
let scientificKeys = document.getElementById('scientific-keys');
let isScientific = false;

function appendValue(value) {
    if (display.value === "0") display.value = value;
    else display.value += value;
}

function clearDisplay() {
    display.value = "0";
}

function toggleMode() {
    isScientific = !isScientific;
    const container = document.querySelector('.buttons-grid');
    const btn = document.getElementById('mode-btn');

    if (isScientific) {
        container.classList.add('scientific-active');
        btn.innerText = "Mudar para Simples";
    } else {
        container.classList.remove('scientific-active');
        btn.innerText = "Mudar para Científica";
    }
}

function calculateResult() {
    try {
        // eval() resolve operações básicas (+, -, *, /) e potências (**)
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}

function calculatePercentage() {
    display.value = eval(display.value) / 100;
}

function calcScientific(func) {
    let val = parseFloat(display.value);
    
    switch(func) {
        case 'sin': display.value = Math.sin(val * Math.PI / 180).toFixed(4); break; // Graus para radianos
        case 'cos': display.value = Math.cos(val * Math.PI / 180).toFixed(4); break;
        case 'tan': display.value = Math.tan(val * Math.PI / 180).toFixed(4); break;
        case 'sqrt': display.value = Math.sqrt(val); break;
        case 'fact': display.value = factorial(val); break;
    }
}

function factorial(n) {
    if (n < 0) return "Erro";
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}