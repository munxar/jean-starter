///<reference path="../typings/tsd.d.ts"/>
import * as express from "express";
import {join} from "path";
import {api} from "./api";

var app = express();

app.use(express.static(join(__dirname, "../frontend")));

app.use("/api", api);

app.listen(3333);
