const alunos = [
    { nome:'João', nota: 7.5},
    { nome:'Maria', nota: 5.8},
    { nome:'Pedro', nota: 6.0},
    { nome:'Ana', nota: 8.3},
    { nome:'Lucas',nota: 4.7}
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);