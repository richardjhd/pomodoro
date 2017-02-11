//  Classe Pomodoro
function Pomodoro() {

    // Atributos ----------------------------------------------------------------------
    let inputPomodoro = 1500; // 1500 segundos = 25 minutos
    let inputPausaCurta = 300; // 300 segundos = 5 minutos
    let inputPausaLonga = 900; // 900 segundos = 15 minutos

    var textoTimer = document.getElementById('textoTimer');
    var textoContagem = document.getElementById('textoContagem');
    var btnIniciar = document.getElementById('btnIniciar');
    var btnParar = document.getElementById('btnParar');
    var btnReiniciar = document.getElementById('btnReiniciar');

    var ciclo;
    var tempoTimer;
    var cont = 0;
    var contPomodoros = 0;
    var contPausasCurtas = 0;
    var contPausasLongas = 0;

    var audio = new Audio('bell.mp3');


    // Métodos ------------------------------------------------------------------------
    this.formataTimer = formataTimer;
    this.timer = timer;
    this.montaTextoContagem = montaTextoContagem;
    this.escolheTimer = escolheTimer;
    this.executaTimer = executaTimer;
    this.executaNotificacao = executaNotificacao;
    this.iniciar = iniciar;
    this.parar = parar;
    this.reiniciar = reiniciar;


    function formataTimer (quantSeg) {
        var min = parseInt(quantSeg / 60);
        var seg = quantSeg % 60;

        if (min < 10) {
            min = "0" + min;
            min = min.substr(0, 2);
        }
        if (seg <= 9) {
            seg = "0" + seg;
        }
        mostraTimer = min + ':' + seg;
        return mostraTimer;
    }

    function timer() {
        if (tempoTimer >= 0) {
            this.textoTimer.innerHTML = formataTimer(tempoTimer);
            ciclo = setTimeout(function() { timer() }, 1000);
            tempoTimer--;
        } else if (tempoTimer < 0) {
            audio.play();
            setTimeout(function() { executaNotificacao(); }, 1);
            setTimeout(function() { executaTimer(); }, 2);
            montaTextoContagem();
        }
    }

    function montaTextoContagem() {
        txt = "Pomodoros: <strong>" + contPomodoros + "</strong> | Pausas Curtas: <strong>" + contPausasCurtas + "</strong> | Pausas Longas: <strong>" + contPausasLongas + "</strong>";
        this.textoContagem.innerHTML = txt;
    }

    function escolheTimer(tipoTimer) {
        tempoTimer = tipoTimer;
        timer();
        cont++;
    }

    function executaTimer() {
        if (cont == 0 || cont%2 == 0) {
            escolheTimer(inputPomodoro);
            contPomodoros++;
        } else if (cont%2 != 0 && contPomodoros%4 != 0) {
            escolheTimer(inputPausaCurta);
            contPausasCurtas++;
        } else {
            escolheTimer(inputPausaLonga);
            contPausasLongas++;
        }
    }

    function executaNotificacao() {
        if (cont%2 != 0 && contPomodoros%4 != 0) {
            alert("Pausa Curta!\nDescanse por " + inputPausaCurta/60 + " minutos.");
        } else if (cont%2 != 0 && contPomodoros%4 == 0) {
            alert("Pausa Longa!\nDescanse por " + inputPausaLonga/60 + " minutos.");
        } else {
            alert("Pomodoro!\nMantenha o foco por " + inputPomodoro/60 + " minutos.");
        }
    }

    function iniciar() {
        self.btnIniciar.disabled = true;
        self.btnParar.disabled = false;
        self.btnReiniciar.disabled = false;

        executaTimer();
    }

    function parar() {
        confirmado = confirm("Deseja realmente parar o timer atual?\nSe fizer isso, quando iniciar novamente será executado o próximo timer...");
        if (confirmado) {
            self.btnIniciar.disabled = false;
            self.btnParar.disabled = true;
            self.btnReiniciar.disabled = false;

            clearTimeout(ciclo);
        }
    }

    function reiniciar() {
        self.btnIniciar.disabled = false;
        self.btnParar.disabled = true;
        self.btnReiniciar.disabled = true;

        clearTimeout(ciclo);
        self.textoTimer.innerHTML = "25:00";
        self.textoContagem.innerHTML = "Pomodoros: <strong>0</strong> | Pausas Curtas: <strong>0</strong> | Pausas Longas: <strong>0</strong>";
        cont = 0;
        contPomodoros = 0;
        contPausasCurtas = 0;
        contPausasLongas = 0;
    }

}
