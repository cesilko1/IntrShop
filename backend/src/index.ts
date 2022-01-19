import express, { Express, Request, Response } from 'express';
import cors from 'cors';


const App: Express = express();

const CorsOptions = {
	origin: '*',
	exposedHeaders: 'token'
}

const expressOptions = {
	extended: true
}

App.use(cors(CorsOptions));
App.use(express.urlencoded(expressOptions));
App.use(express.json());

App.get('/', (req: Request, res: Response)=>{
    res.status(200).send("Hello itrshop server");
});

App.listen(3001, ()=>{
    console.log("Server running...");
});
