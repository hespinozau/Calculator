let func;
let a;
let b;

//Operations

function sum(a,b){
    return parseInt(a) + parseInt(b);
    }

function sustraction(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function division(a,b){
    if(b==0){
        return 'ERROR'
    }
    let frac= a / b;
    return frac;
}
function power(a,b){
    return Math.pow(a,b);
}

//Equal to function
function equalTo(a,b,func){
    let result= 0
    if(func=='suma'){
        result= sum(a,b);
        document.getElementById('screen').innerHTML = result;
    
    }else if(func=='resta'){
        result= sustraction(a,b);
        document.getElementById('screen').innerHTML = result;

    }else if(func=='multiplicacion'){
        result= multiply(a,b);
        document.getElementById('screen').innerHTML = result;

    }else if(func=='dividir'){
        result = division(a,b);
        document.getElementById('screen').innerHTML = result;

    }else if(func=='potencia'){
        result = power(a,b);
        document.getElementById('screen').innerHTML = result;
    }

}

//Reset screen Action
const ceBtn = document.querySelector('#reset');
ceBtn.addEventListener('click', () => {
    document.getElementById('screen').innerHTML = ''
});

//Numbers Buttons Action
const numberBtn = document.querySelectorAll('.numBtn')
numberBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', () => {
        document.getElementById('screen').innerHTML += numBtn.textContent

    })
})

//Operation Button Action
const operationBtn = document.querySelectorAll('.operBtn');
operationBtn.forEach((operBtn) => {
    operBtn.addEventListener('click', () => {
        func = operBtn.id;
        a = document.getElementById('screen').textContent;
        document.getElementById('screen').innerHTML = ''
    })
})

//Equal button action
const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
    b = document.getElementById('screen').textContent;
    equalTo(a,b,func);
})