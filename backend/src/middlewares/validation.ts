import {NextFunction, Request, RequestHandler, Response} from "express";
import {check, validationResult} from "express-validator";

export const ValidationMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    await check().isArray().withMessage('myArray must be an array').run(req);
    await   check().custom((array) => {
            if (!Array.isArray(array) || array.length === 0) {
                throw new Error('myArray should not be empty');
            }
            return true;
        }).run(req);
    await  check('.*').isString().withMessage('Each element in myArray must be a string').run(req)

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400)
            .json({errors: errors.array()})
    }
    return next();

}


