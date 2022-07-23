# javascript
# Operadores

## Aritméticos

+ somar
- subtrair 
* multiplicar
/ dividir
% resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true/false):

< menor que
> maior que
<= menor ou igual
=> maior ou igual

## Comparadores lógicos: teste lógico, retorno booleano (true/false):

== igualdade entre sentenças (valor)
!= diferença entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)

## Operadores de lógica e junção lógica 

!   NÃO (NOT)
&&  E (AND)
||  OU (OR)

### Exemplos

a != b // o valor de a é diferente de b
x !=== y // o valor e o tipo de x é diferente de y
!a == b // o valor de a nao é igual ao valor de b 

### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

### Operador lógico de contribuicão 

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:

var meuCarro = cor == 'preto' ? 'preto' : 'branco';

## Calculo media 

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media = ( nota1+nota2+nota3+nota4 )/ 4;
if ( media >= 8 ){
    console.log ('aluno aprovado')
} else { 
     console.log ("aluno reprovado")
}

# Code Togheter
1. descrever um algoritmo para resolvero problema da 'travessia' de modo seguro; um homem precisa atravessarum rio com um barco que possui capacidade apenas para carregar ele mesmo e mais um e seus tres pertences, que são: um lobo, uma cabra e um maço de alfafa. em cada viagem só poderá ir o homem e apenas um de seus pertences. A seguinte regra deverá ser respeitada: o lobo nao pode ficar sozinho com a cabra e nem a cabra sozinha com o maço de alfafa. escreva um algoritmo para fazer a travessia dos pertences que estao em uma margem do rio para outra.

2. JS: Exibir média de 3 números com entradas pelo formulario HTML
enviar links do git ou do fiddle.