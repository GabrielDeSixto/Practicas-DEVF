let montos = {
    '313203045': 8000,
    '313234045': 12000,
    '3132234045': 4800
}

let url = new URL(window.location.href);
let numcta = url.searchParams.get('numcta');

function actulizaSaldoActual(){
    const saldoActual = document.getElementById('saldoActual');
    saldoActual.innerHTML = '$' + montos[numcta];
}

actulizaSaldoActual();

function actulizaNumUsuario(){
    const numUsuario = document.getElementById('numUsuario');
    numUsuario.innerHTML = numcta;
}

actulizaNumUsuario();

const inputMonto = document.getElementById('inputMonto');


const ingresaMonto = document.getElementById('ingresarMonto');
ingresaMonto.addEventListener('click',function(e){
    let monto = inputMonto.value;
    monto = parseInt(monto);
    montos[numcta] = montos[numcta]+monto;
    actulizaSaldoActual();
});

