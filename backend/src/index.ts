import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import Config from './config';

const App: Express = express();

const CorsOptions = {
	origin: '*',
	exposedHeaders: 'token'
}

const expressOptions = {
	extended: true
}

const MySQL = mysql.createConnection({
	host: Config.mysql_hostname,
	user: Config.mysql_username,
	password: Config.mysql_password
});

MySQL.connect((error)=>{
	if(error) {console.error(error); return;}
	console.log("Connected");
});

App.use(cors(CorsOptions));
App.use(express.urlencoded(expressOptions));
App.use(express.json());

App.get('/', async (req: Request, res: Response)=>{
	const response = await MySQL.query('show databases;');
	console.log(response);
    res.status(200).send("Hello itrshop server");
});

App.listen(3001, ()=>{
    console.log("Running...");
});
