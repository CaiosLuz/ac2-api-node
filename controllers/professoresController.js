let professores = [
    {
        "id": "1",
        "nome": "Prof. Carlos",
        "idade": 40,
        "departamento": "Matemática",
        "turmas": [
            { "codigo": "9A", "disciplina": "MAT101", "alunos": ["João", "Maria", "Pedro"] },
            { "codigo": "10A", "disciplina": "MAT201", "alunos": ["Ana", "Luiz"] }
        ]
    },
    {
        "id": "2",
        "nome": "Prof. Ana",
        "idade": 35,
        "departamento": "História",
        "turmas": [
            { "codigo": "9A", "disciplina": "HIS101", "alunos": ["João", "Pedro"] },
            { "codigo": "10B", "disciplina": "HIS201", "alunos": ["Maria", "Carlos", "Luiza"] }
        ]
    },
    {
        "id": "3",
        "nome": "Prof. João",
        "idade": 50,
        "departamento": "Ciências",
        "turmas": [
            { "codigo": "9A", "disciplina": "CIE101", "alunos": ["João", "Maria"] },
            { "codigo": "9B", "disciplina": "CIE101", "alunos": ["Pedro", "Luiz"] }
        ]
    }
];

exports.getAllProfessores = (req, res) => {
    res.json(professores);
};

exports.getProfessorById = (req, res) => {
    const id = req.params.id;
    const professor = professores.find(p => p.id === id);
    if(!professor) return res.status(404).json({ mensagem: "ID inexistente!" });
    res.json(professor);
};

exports.getTurmasByProfessor = (req, res) => {
    const id = req.params.id;
    const professor = professores.find(p => p.id === id);
    if(!professor) return res.status(404).json({ mensagem: "ID inexistente!" });
    res.json(professor.turmas);
};

exports.updateProfessor = (req, res) => {
    const id = req.params.id;
    const professor = professores.find(p => p.id === id);
    if(!professor) return res.status(404).json({ mensagem: "ID inexistente!" });
    
    const { nome, idade, departamento } = req.body;
    if (nome) professor.nome = nome;
    if (idade) professor.idade = idade;
    if (departamento) professor.departamento = departamento;

    res.json(professor);
};

exports.addTurma  = (req, res) => {
    const id = req.params.id;
    const professor = professores.find(p => p.id === id);
    if(!professor) return res.status(404).json({ mensagem: "ID inexistente!" });
    
    const { codigo, disciplina, alunos } = req.body;
    professor.turmas.push({ codigo, disciplina, alunos });
    res.status(201).json(professor);
};

exports.getByDepartamento = (req, res) => {
    const dep = req.params.departamento.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const resultado = professores.filter(p => p.departamento.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === dep);
    res.json(resultado);
}

exports.deleteProfessor = (req, res) => {
    const id = req.params.id;
    const index = professores.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ mensagem: "ID inexistente!" });

    professores.splice(index, 1);
    res.json({ mensagem: "Professore removido com sucesso!" });
}
