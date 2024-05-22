import {NextFunction,Request, Response} from "express";

/**
 * Global error handling middleware
 *
 * @param err - error Express
 * @param req - initial request
 * @param res - response object
 * @param next - Allows you to switch to the next middleware if existing
 *
 */
export const ExceptionsHandler=async (err:any,req:Request,res:Response,next:NextFunction)=>{
    if(res.headersSent){
        return next(err)
    }

    /**
     *  cas error 400 || 404
     */
    if (err.status && err.error) {
        const message = {
            status: err.status,
            success: false,
            error: err.error
        };

        return res
            .status(err.status)
            .json(message)
    }

    /**
     * In the other cases, we return a 500
     */
    return res
        .status(500)
        .json({ error: 'Internal error' })
}
