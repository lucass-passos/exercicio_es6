const alunos = [
    { nome: "Ana", nota: 7.5 },
    { nome: "Bruno", nota: 5.0 },
    { nome: "Carlos", nota: 8.0 },
    { nome: "Daniela", nota: 4.5 },
    { nome: "Eduardo", nota: 6.0 },
];


const filtrarAprovados = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
};


const aprovados = filtrarAprovados(alunos);
console.log("Alunos aprovados:");
aprovados.forEach(aluno => {
    console.log(`- ${aluno.nome} com nota ${aluno.nota}`);
});