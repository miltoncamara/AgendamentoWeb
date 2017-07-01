import { FormControl } from '@angular/forms';

export class CustomValidator {
    static NumerosNegativosValidator(controle: FormControl) {
        var valor: number = controle.value.toString().replace(/[^0-9]/g, '');

        if (valor < 0) {
            return {
                "Número inválido": true
            };
        }

        return null;
    }

    static CepValidator(controle: FormControl) {
        var valor: String = controle.value.toString().replace(/[^0-9]/g, '').slice(0, 8);        

        if (valor.length != 8) {
            return {
                "CEP inválido": true
            };
        }

        return null;
    }

    static SelectValidator(controle: FormControl) {
        var valor: number = controle.value.toString();        

        if (valor == 0) {
            return {
                "Selecione uma opção.": true
            };
        }

        return null;
    }

    static EmailValidator(controle: FormControl) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(controle.value)) {
            return { "E-mail inválido": true };
        }

        return null;
    }
}