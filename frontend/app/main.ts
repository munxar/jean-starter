///<reference path="../../typings/tsd.d.ts"/>
import * as angular from "angular";
import {AppCtrl} from "./AppCtrl";

angular.module("App", [])
    .controller("AppCtrl", AppCtrl)
;

angular.bootstrap(document, ["App"]);
