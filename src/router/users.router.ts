import express from "express";
import { getAllUsers,deleteUser , updateUsername } from "../controllers/users.controller";
import { isAuthenticated, isAuthorized } from "../middlewares";
import { update } from "lodash";


export default (router: express.Router)=> {
    router.get("/users", isAuthenticated ,getAllUsers);
    router.delete("/users/:id",isAuthenticated, isAuthorized, deleteUser);
    router.patch("/users/:id",isAuthenticated, isAuthorized, updateUsername);
}