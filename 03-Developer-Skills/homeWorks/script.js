const alice = {
    nome: 'alice',
    sobrenome: 'johnson',
    cargo: 'desenvolvedora',
    salario: 6000,
    getsalarioanual: function (salarioAlice) {
        let salarioAlice = this.salario * 12;
        return salarioAlice;
    }
}
const bob = {
    nome: 'bob',
    sobrenome: 'Smith',
    cargo: 'designer',
    salario: 8000,
    getsalarioanual: function (salarioBob) {
        let salarioBob = this.salario * 12;
        return salarioBob;
    }
}
if (alice.getsalarioanual() > bob.getsalarioanual()) {
    console.log(`${alice.nome} ${alice.sobrenome} é ${alice.cargo} e possui o maior salário anual de R$${alice.getsalarioanual}`);
} else {
    console.log(`${bob.nome} ${bob.sobrenome} é ${bob.cargo} e possui o maior salário anual de R$${bob.getsalarioanual}`);
}