import express from 'express';
import authentication from './authentication';
import users from './users';
import views from './views';
import alunos from './alunos.router';

const router = express.Router();

export default  (): express.Router => {

    authentication(router);

    users(router);

    views(router);

    alunos(router);


    return router;
}