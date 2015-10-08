///<reference path="../typings/tsd.d.ts"/>
import {Router} from "express";
import {IMessage} from "../shared/interfaces";

export var api = Router();

api.get("/", (req, res) => {
    var message: IMessage = { message: "Hello, World!" };

    res.json(message);
});

