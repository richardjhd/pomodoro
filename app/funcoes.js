//  Funções

var cronometro = document.getElementById('cronometro');
var textoContador = document.getElementById('textoContador');

var tempoPomodoro = 1500;
var tempoPausaCurta = 300;
var tempoPausaLonga = 900;

var contPomodoros = 0;
var contPausasCurtas = 0;
var contPausasLongas = 0;

var btnIniciar = document.getElementById('btnIniciar');
var btnParar = document.getElementById('btnParar');
var btnReiniciar = document.getElementById('btnReiniciar');

var inputPomodoro = document.getElementById('inputPomodoro');
var inputPausaCurta = document.getElementById('inputPausaCurta');
var inputPausaLonga = document.getElementById('inputPausaLonga');
var btnSalvarConfiguracoes = document.getElementById('btnSalvarConfiguracoes');


// function inicializacaoSistema() {}

function iniciarCronometro(minutos) {
  cronometro.innerHTML = minutos;
  if (minutos < 1) {
    clearTimeout(cronometro);
  }
  minutos--;
}

function pararCronometro() {
  ...
}

function reiniciarCronometro() {
  ...
}




function countDown(secs) {
    //var btnIniciar = document.getElementById('btnIniciar');
    var cronometro = document.getElementById('cronometro');
    cronometro.innerHTML = secs;
    //btnIniciar.value = "Aguarde "+secs+" segundos";<!--texto que aparecerá enquanto o tempo descer, não altere o"+secs+"-->
    if(secs < 1) {
        clearTimeout(timer);
        btnIniciar.disabled = false;
    }
    secs--;
    var timer = setTimeout('countDown('+secs+')',1000);
}
