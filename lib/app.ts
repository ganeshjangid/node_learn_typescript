import * as express from 'express';
import * as bodyParser from "body-parser";
import { Request, Response } from "express";

class App{
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    public app: express.Application;

    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
    }

    private routes() {
        const router = express.Router();
        
        router.get("/",(req:Request,res:Response)=>{
            res.status(200).json({
                msg:"Hello World"
            });
        });

        router.post("/",(req:Request,res:Response)=>{
            const data=req.body;
            res.status(200).send(data);
        });

        this.app.use('/',router);
    }
}

module.exports=new App().app;