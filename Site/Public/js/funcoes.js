// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nickname = document.getElementById("nickname");

    if (email != null && nome != null) {

        nickname.innerHTML = nome;
        mensagem_erro.innerHTML = `Logando...`;

    } else {
        mensagem_erro.innerHTML = `Email ou senha invalidos`;
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// Validações cadastro
function validacoesCadastro() {
    var erro = false;
    
    if (nickVar == "" || emailVar == "" || senhaVar == "" || validacaoSenhaVar == "") {
        erro_geral.innerHTML = `Um ou mais campos em branco`;
        
        erro = true;
    } else {
        erro_geral.innerHTML = ``;
    }
    
    if (nickVar.length < 4 || nickVar.length > 20) {
        validacao_nick.innerHTML = `Nick tem que ter de 4 a 20 digitos`;
    
        erro = true;
    } else {
        validacao_nick.innerHTML = ``;
    }
    
    if (emailVar.indexOf("@") == -1) {
        validacao_email.innerHTML = `Estrutura do email está errada`;
    
        erro = true;
    } else {
        validacao_email.innerHTML = ``;
    }
    
    if (senhaVar.length < 8 || senhaVar.length > 64) {
        validacao_senha.innerHTML = `Senha tem que ter de 8 a 64 digitos`;
    
        erro = true;
    } else {
        validacao_senha.innerHTML = ``;
    }
    
    if (senhaVar != validacaoSenhaVar) {
        validacao_conf_senha.innerHTML = `Confirmação da senha e senha estão diferentes`;
    
        erro = true;
    } else {
        validacao_conf_senha.innerHTML = ``;
    }
    
    if (erro == true) {
        return false
    } else {
        cadastrar()
    }
}

