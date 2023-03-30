import { Router } from "express";
import { WebCtrl } from "../controller/WebController.js";

const { getWebs, getWeb, createWeb, updateWeb, deleteWeb, getWebsByAd } = WebCtrl;

const routerWeb = Router();

routerWeb.get("/web", getWebs);
routerWeb.get("/web/:id", getWeb);
routerWeb.get("/web/ad/:ad", getWebsByAd);
routerWeb.post("/web", createWeb);
routerWeb.put("/web/:id", updateWeb);
routerWeb.delete("/web/:id", deleteWeb);

export { routerWeb };
