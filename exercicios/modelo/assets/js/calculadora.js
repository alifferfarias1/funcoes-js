function criaCalculadora() {

    return {
        display: document.querySelector('.display'), // podemos acessar usando this.display



        clearDisplay() {

            this.display.value = '';
        },



        inicia() {
            this.clickBotoes();
        },

        clickBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
            }.bind(this));

        },
        btnParaDisplay(valor) {
            this.display.value += valor;

        }
    }

}

const calculadora = criaCalculadora()
calculadora.inicia();