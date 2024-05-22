import {Router} from "express";
import * as dvdCtrl from "./dvd.controller"
import {ValidationMiddleware} from "../../middlewares/validation";

const DvdRouter = Router()

DvdRouter.post('/calculate', dvdCtrl.calculate)
//DvdRouter.post('/calculate',ValidationMiddleware, dvdCtrl.calculate)


export {DvdRouter}
