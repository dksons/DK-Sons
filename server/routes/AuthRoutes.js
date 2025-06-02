import express, { Router } from  "express";
import {login ,logout,signup} from "../controllers/AuthController.js"

const Authrouter=express.Router();


Authrouter.post("/signup",signup);
Authrouter.post("/login",login);
Authrouter.get('/logout',logout)

export default Authrouter;
