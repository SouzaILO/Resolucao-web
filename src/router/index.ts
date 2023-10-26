import express from 'express';
import authentication from './authentication';
import users from './users.router';
import views from './views.router';
import alunos from './alunos.router';
import professores from './professores.router';

const router = express.Router();

export default  (): express.Router => {

    authentication(router);

    users(router);

    views(router);

    alunos(router);

    professores(router);
    

    return router;
}