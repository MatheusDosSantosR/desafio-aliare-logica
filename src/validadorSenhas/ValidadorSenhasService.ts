import { EValidacoesSenhas } from "./EValidacoesSenhas"

export class ValidadorSenhasService {
    public validar(senha: string) {
        const criteriosNaoAtendidos: Array<EValidacoesSenhas> = []

        if (!this.hasPeloMenosSeisCaracteres(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_6_CARACTERES)

        if (!this.hasMenosDeDozeCaracteres(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_DE_12_CARACTERES)

        if (!this.hasExclamacao(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UM_PONTO_EXCLAMACAO)

        if (!this.hasArroba(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UM_ARROBA)

        if (!this.hasPeloMenosUmaLetraMaiuscula(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UMA_LETRA_MAIUSCULA)

        if (!this.hasPeloMenosUmaLetraMinuscula(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UMA_LETRA_MINUSCULA)

        if (!this.hasNumero(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UM_NUMERO)

        if (!this.isPrimeiroCaractereNumero(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.PRIMEIRO_CARACTERE_DA_SENHA_DEVE_SER_NUMERO)

        if (!this.isUltimoCaractereLetra(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.ULTIMO_CARACTERE_DA_SENHA_DEVE_SER_LETRA)

        return criteriosNaoAtendidos
    }

    public hasPeloMenosSeisCaracteres(senha: string): boolean {
        /* 
        Você deve implementar este método, conforme o detalhamento abaixo. 
        Você deve apagar a linha que lança a exceção 'Não implementado. Você deve implementar este método!'

        Objetivo: deve validar se a senha possui pelo menos seis caracteres. 
        Retorno:
            1. Se a senha tiver pelo menos seis caracteres, deve retornar true;
            2. Se a senha tiver menos de seis caracteres, retornar false
        */

        return senha.length >= 6;
    }

    public hasMenosDeDozeCaracteres(senha: string): boolean {
        /* 
            Você deve implementar este método, conforme o detalhamento abaixo. 
            Você deve apagar a linha que lança a exceção 'Não implementado. Você deve implementar este método!'

            Objetivo: deve validar se a senha possui menos de doze caracteres. 
            Retorno:
                1. Se a senha tiver menos de doze caracteres, deve retornar true;
                2. Se a senha tiver mais de doze caracteres, deve retornar false;
        */

        return senha.length < 12;
    }

    public hasExclamacao(senha: string): boolean {
        /* 
            Você deve implementar este método, conforme o detalhamento abaixo. 
            Você deve apagar a linha que lança a exceção 'Não implementado. Você deve implementar este método!'

            Objetivo: deve validar se a senha possui o caractere ! (ponto de exclamação). 
            Retorno:
                1. Se a senha possuir ponto de exclamação, deve retornar true;
                2. Se a senha não possuir ponto de exclamação, deve retornar false;
        */

        return senha.includes('!');
    }

    public hasArroba(senha: string): boolean {
        /* 
            Você deve implementar este método, conforme o detalhamento abaixo. 
            Você deve apagar a linha que lança a exceção 'Não implementado. Você deve implementar este método!'

            Objetivo: deve validar se a senha possui o caractere @ (arroba). 
            Retorno:
                1. Se a senha possuir ponto de arroba, deve retornar true;
                2. Se a senha não possuir ponto de arroba, deve retornar false;
        */
        return senha.includes('@');
    }

    public hasPeloMenosUmaLetraMaiuscula(senha: string): boolean {
        /* 
            Você deve implementar este método, conforme o detalhamento abaixo. 
            Você deve apagar a linha que lança a exceção 'Não implementado. Você deve implementar este método!'

            Objetivo: deve validar se existe pelo menos uma letra maiúscula na senha. 
            Retorno:
                1. Se a senha possuir pelo menos uma letra maiúscula, deve retornar true;
                2. Se a senha não possuir pelo menos uma letra maiúscula, deve retornar false;
        */

        for (const caracter of senha) {
            if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
                return true;
            }
        }
        return false;

    }

    public hasPeloMenosUmaLetraMinuscula(senha: string): boolean {
        /* 
            Você deve implementar este método, conforme o detalhamento abaixo. 
            Você deve apagar a linha que lança a exceção 'Não implementado. Você deve implementar este método!'

            Objetivo: deve validar se existe pelo menos uma letra minúscula na senha. 
            Retorno:
                1. Se a senha possuir pelo menos uma letra minúscula, deve retornar true;
                2. Se a senha não possuir pelo menos uma letra minúscula, deve retornar false;
        */
        for (const caracter of senha) {
            if (caracter === caracter.toLowerCase() && caracter !== caracter.toUpperCase()) {
                return true;
            }
        }
        return false;
    }

    public hasNumero(senha: string): boolean {
        /* 
            Você deve implementar este método, conforme o detalhamento abaixo. 
            Você deve apagar a linha que lança a exceção 'Não implementado. Você deve implementar este método!'

            Objetivo: deve validar se existe pelo menos um número na senha. 
            Retorno:
                1. Se a senha possuir pelo menos um número, deve retornar true;
                2. Se a senha não possuir pelo menos um número, deve retornar false;
        */
        for (const caracter of senha) {
            if (!isNaN(Number(caracter)) && caracter.trim() !== '') {
                return true;
            }
        }
        return false;
    }

    public isPrimeiroCaractereNumero(senha: string): boolean {
        /* 
            Você deve implementar este método, conforme o detalhamento abaixo. 
            Você deve apagar a linha que lança a exceção 'Não implementado. Você deve implementar este método!'

            Objetivo: deve validar se o primeiro caractere da senha é um número. 
            Retorno:
                1. Se o primeiro caractere da senha for um número, deve retornar true;
                2. Se a primeiro caractere da senha não for um número, deve retornar false;
        */

        const primeiroCaractere = senha.charAt(0);
        if (primeiroCaractere === ' ' || primeiroCaractere === '') {
            return false;
        }
        return !isNaN(Number(primeiroCaractere));
    }

    public isUltimoCaractereLetra(senha: string): boolean {
        /* 
            Você deve implementar este método, conforme o detalhamento abaixo. 
            Você deve apagar a linha que lança a exceção 'Não implementado. Você deve implementar este método!'

            Objetivo: deve validar se o último caractere da senha é uma letra. 
            Retorno:
                1. Se o último caractere da senha for uma letra, deve retornar true;
                2. Se a último caractere da senha não for uma letra, deve retornar false;
        */

        const ultimoCaractere = senha.charAt(senha.length - 1);
        return /^[a-zA-Z]$/.test(ultimoCaractere);
    }
}