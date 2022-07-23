function calcularMedia( notas ) {

    var soma = 0;
for( c = 0; c < notas.length; c++ ) {
    soma += notas[c];
}

media = soma / notas.length;

return media;
}

let media; //escopo global

function aprovacao( notas ) {

let media = calcularMedia( notas ); //escopo da funcao 

let condicao = media >= 7 ? "aluno aprovado" : "aluno reprovado";

return 'Media: ' + media + ' -Resultado: ' + condicao;


}

//console.log()

//console.log( " Media:" + calcularMedia( [ 8.8 ] ) )
//console.log( aprovacao( calcularMedia( [ 8.8 ] ) ) )
//console.log( aprovacao( [ 8,7,5 ] ) )
//console.log( aprovacao( [ 8,9,6 ] ) )
//console.log( "Media:" + calcularMedia( [ 7,9 ] ) )
//console.log( aprovacao( calcularMedia( [ 7.9 ] ) ) )

//Funçoes Recursivas

function contagemRegressiva(numero){

console.log(numero);

let proximoNumero = numero - 1;

if(proximoNumero > 0)

contagemRegressiva(proximoNumero);


}

//contagemRegressiva(10);

document.addEventListener('submit', function( evento ){

    evento.preventDefault();

    let formulario = document.getElementById("formulario-01")

    let dados = new FormData(formulario);

    let objeto = {};

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        notas += parseInt(dados.get(key));
    }

    console.log(notas);
    
    console.log(objeto);

    document.getElementById('resultado').innerHTML = aprovacao(notas);

});

