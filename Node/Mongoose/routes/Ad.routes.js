import { Router } from "express";
import { AdCtrl } from "../controller/AdController.js";

const { getAds, getAd, createAd, updateAd, deleteAd } = AdCtrl;

const routerAd = Router();

routerAd.get("/ad", getAds);
routerAd.get("/ad/:id", getAd);
routerAd.post("/ad", createAd);
routerAd.put("/ad/:id", updateAd);
routerAd.delete("/ad/:id", deleteAd);

export { routerAd };
