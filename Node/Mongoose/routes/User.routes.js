import { Router } from "express";
import { UserCtrl } from "../controller/UserController.js";

const { createUser, deleteUser, getUser, getUsers, updateUser } = UserCtrl;

const routerUsers = Router();

routerUsers.get("/user", getUsers);
routerUsers.get("/user/:id", getUser);
routerUsers.post("/user", createUser);
routerUsers.put("/user/:id", updateUser);
routerUsers.delete("/user/:id", deleteUser);

export { routerUsers };
