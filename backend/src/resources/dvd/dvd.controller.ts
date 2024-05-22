import {Router, Request, Response} from "express";
import {DvdService} from "./dvd.service";
import {BadRequestException} from "../../utils/exceptions";


/**
 * Instance of DvdService
 */
const service = new DvdService()

/**
 *  calculate-total price of DVD
 *
 * @param {Request} req
 * @param {Response} res
 * @return {*}
 */
export const calculate = async (req: Request, res: Response) => {
    try {
        const data: string[] = req.body;
        const total = await service.calculateTotalPrice(data);
        res.json({total})
    } catch (err) {

        throw new BadRequestException('error')

    }

}







