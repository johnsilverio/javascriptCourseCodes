### DECLARAÇÃO DE VARIÁVEIS
Existem 3 tipos de declarações de variáveis: `let`, `const` e `var`.

- `let` é usado para declarar uma variável com escopo de bloco e pode ser atribuída, ou seja, valor mutável.
- `const` é uma constante; seu valor não pode ser modificado.
- `var` é a maneira antiga de declarar uma variável.

### TIPOS DE DADOS PRIMITIVOS
#### Existem 7 tipos de dados primitivos em JavaScript.

- **Números**: Valores numéricos.
- **Strings**: Valores de texto.
- **Booleans**: Valores lógicos, `true` ou `false`.
- **Undefined**: Uma variável que ainda não foi definida.
- **Null**: Um valor inválido ou "vazio".
- **Símbolos**: Valores únicos e imutáveis, frequentemente usados como chaves de objetos.
- **BigInt**: Grandes números inteiros com um `n` no final do valor.

### OPERADORES BÁSICOS
#### Operadores Aritméticos
- **`+`**: Adição
- **`-`**: Subtração
- **`*`**: Multiplicação
- **`/`**: Divisão
- **`%`**: Módulo (resto)
- **`**`**: Exponenciação

#### Operadores de Atribuição
- **`=`**: Atribui um valor a uma variável
- **`+=`**: Adiciona e atribui um valor (ex.: `x += y` é equivalente a `x = x + y`)
- **`-=`**: Subtrai e atribui um valor
- **`*=`**: Multiplica e atribui um valor
- **`/=`**: Divide e atribui um valor
- **`%=`**: Módulo e atribui um valor

#### Operadores de Comparação
- **`==`**: Igual a
- **`===`**: Estritamente igual (valor e tipo iguais)
- **`!=`**: Diferente de
- **`!==`**: Estritamente diferente (valor ou tipo diferente)
- **`>`**: Maior que
- **`>=`**: Maior ou igual a
- **`<`**: Menor que
- **`<=`**: Menor ou igual a

#### Operadores Lógicos
- **`&&`**: E lógico
- **`||`**: OU lógico
- **`!`**: NÃO lógico

#### Operadores Bit a Bit
- **`&`**: E
- **`|`**: OU
- **`^`**: XOR (OU exclusivo)
- **`~`**: NÃO
- **`<<`**: Deslocamento para a esquerda
- **`>>`**: Deslocamento para a direita
- **`>>>`**: Deslocamento para a direita com preenchimento zero

#### Operadores Unários
- **`typeof`**: Retorna o tipo de uma variável
- **`void`**: Avalia uma expressão e retorna `undefined`
- **`delete`**: Exclui uma propriedade de um objeto
- **`++`**: Incremento
- **`--`**: Decremento

#### Operador Ternário
- **`condition ? expr1 : expr2`**: Retorna `expr1` se a condição for verdadeira, caso contrário, retorna `expr2`.

### Coerção de Tipos em JavaScript
A coerção de tipos é o processo pelo qual o JavaScript converte valores de um tipo para outro. Isso pode ocorrer de forma implícita (automática) ou explícita (quando você força a conversão). Vamos entender melhor esses conceitos:

#### Coerção Implícita
    A coerção implícita acontece automaticamente quando o JavaScript precisa que um valor seja de um tipo específico para realizar uma operação. Por exemplo:
    ```
        console.log('5' + 3); // '53'
        console.log('5' - 3); // 2
    ```
    No primeiro caso, o operador + força a coerção do número 3 para uma string, resultando na concatenação das duas strings '5' e '3'. No segundo caso, o operador - não faz sentido para strings, então o JavaScript converte a string '5' para o número 5 e realiza a subtração.

#### Coerção Explícita
    A coerção explícita ocorre quando você, de forma deliberada, converte um valor de um tipo para outro usando funções ou métodos. Alguns exemplos incluem:
    ```
        let num = '123';
        let str = 123;

        console.log(Number(num)); // 123 (converte string para número)
        console.log(String(str)); // '123' (converte número para string)
        console.log(Boolean(num)); // true (converte string para boolean)
    ```
    Aqui, estamos usando as funções Number, String e Boolean para converter explicitamente os valores.
#### Coerção em Operadores Comparativos
    Quando usamos operadores comparativos, como == e ===, a coerção de tipos pode afetar os resultados:

        == (igualdade abstrata): Faz coerção de tipos se necessário.
        === (igualdade estrita): Não faz coerção de tipos.

        