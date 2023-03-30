import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./database.js";
import { routerUsers } from "./routes/User.routes.js";
import { routerAdmin } from "./routes/Admin.routes.js";
import { routerAd } from "./routes/Ad.routes.js";
import { routerWeb } from "./routes/Web.routes.js";

dotenv.config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
    this.conexionBd();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(routerUsers);
    this.app.use(routerAdmin);
    this.app.use(routerAd);
    this.app.use(routerWeb);
  }

  async conexionBd() {
    await dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}!`);
    });
  }
}

export default Server;
