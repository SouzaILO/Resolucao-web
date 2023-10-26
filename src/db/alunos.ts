import mongoose from "mongoose";


const AlunoSchema = new mongoose.Schema({
    Matricula:{type: Number, required: true},
    Nome:{type: String, required: true},
    email: {type: String, required: true},
    endereco: {type: String, required: true},
    Cidade: {type: String, required: true},
    CEP: {type: String, required: true},
    Telefone: {type: String, required: true},
    Escola: {type: String, required: true},
    Idade: {type: String, required: true},
    });


export const AlunoModel = mongoose.model("Alunos", AlunoSchema);

export const createAluno = (values : Record<string, any>) => new AlunoModel(values).save().then((aluno) => aluno.toObject());

export const getAlunos = () => AlunoModel.find()

export const getAlunoByMatricula = (Matricula: Number) => AlunoModel.findOne({Matricula});

export const deleteAlunoByMatricula = (Matricula: Number) => AlunoModel.findOneAndDelete({Matricula});