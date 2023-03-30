import { Router } from "express";
import { AdminCtrl } from "../controller/AdminController.js";

const { getAdmins, getAdmin, createAdmin, updateAdmin, deleteAdmin } =
  AdminCtrl;

const routerAdmin = Router();

// routerAdmin.get('/admin',[
//   validarCampos
// ] ,getAdmins);

routerAdmin.get("/admin", getAdmins);
routerAdmin.get("/admin/:id", getAdmin);
routerAdmin.post("/admin", createAdmin);
routerAdmin.put("/admin/:id", updateAdmin);
routerAdmin.delete("/admin/:id", deleteAdmin);

export { routerAdmin };
