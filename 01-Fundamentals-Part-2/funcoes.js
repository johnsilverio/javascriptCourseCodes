/*
    Função: Trecho de código que só é executado quando é chamado/invocado

        Função Void (vazia)
        Função com Parâmetros(s) 
        Função com Return
        Função Arrow / Arrow Function
        
        let valor = 20;
        
        function incremento() {
            valor = valor + 30;
        }
        
        incremento();
        console.log(valor); 
*/

function mostraNome(nomeDaPessoa) {
    console.log(nomeDaPessoa);
}

mostraNome('John');




// function saudacao(nome, hora) {
//     let mensagem;
//     switch (true) {
//         case (hora <= 12):
//             mensagem = 'Bom dia';
//             break;
//         case (hora <= 18):
//             mensagem = 'Boa tarde';
//             break;
//         case (hora <= 23):
//             mensagem = 'Boa noite';
//             break;
//         default:
//             mensagem = 'Olá'
//             break;
//     }
//     return `${mensagem} ${nome}, como você está?`;
// }

// const oiJohn = saudacao('John', 11);
// console.log(oiJohn);