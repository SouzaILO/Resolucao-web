import mongoose from "mongoose";


const ProfessorSchema = new mongoose.Schema({
    ID:{type: Number, required: true},
    Nome:{type: String, required: true},
    email: {type: String, required: true},
    endereco: {type: String, required: true},
    Cidade: {type: String, required: true},
    CEP: {type: String, required: true},
    Telefone: {type: String, required: true},
    ContaBancaria: {type: String, required: true},
    AgenciaBancaria: {type: String, required: true},
    });


export const ProfessorModel = mongoose.model("Professor", ProfessorSchema);

export const createProfessor = (values : Record<string, any>) => new ProfessorModel(values).save().then((Professor) => Professor.toObject());

export const getProfessor = () => ProfessorModel.find()

export const getProfessorByMatricula = (ID: Number) => ProfessorModel.findOne({ID});

export const deleteProfessorByMatricula = (ID: Number) => ProfessorModel.findOneAndDelete({ID});