const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professoresController');

// Rota para listar todos professores
router.get('/professores', professorController.getAllProfessores);

// Buscar professor por ID
router.get('/professores/:id', professorController.getProfessorById);

// Listar turma de um professor por ID
router.get('/professores/:id/turmas', professorController.getTurmasByProfessor);

// Atulizar dados de um professor
router.put('/professores/:id', professorController.updateProfessor);

// Adicionar uma turma para um professor
router.post('/professores/:id/turmas', professorController.addTurma);

// Listar professores por departamento
router.get('/professores/departamento/:departamento', professorController.getByDepartamento);

// Remover um professor
router.delete('/professores/:id', professorController.deleteProfessor);

module.exports = router;