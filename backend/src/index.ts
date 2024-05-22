import cors from 'cors';
import express from 'express';
import {API_PORT} from "./utils/constant";
import {ExceptionsHandler} from "./middlewares/exceptions.handler";
import {UnknownRoutesHandler} from "./middlewares/unknownRoutes.handler";
import {DvdRouter} from "./resources/dvd/dvd.router";

/**
 * Creation  "application" express
 */
const app=express()

/**
 * Parse request body into JSON
 */
app.use(express.json())

/**
 *  allow all domain names to make requests on our API.
 */
app.use(cors())



/**
* Homepage
*/
app.get('/', (req, res) => res.send('Api Ekinox'));

app.use("/api/dvd",DvdRouter);

/**
 * For all other undefined routes, an error is returned
 */
app.all('*', UnknownRoutesHandler)

/**
 * Error management
 */
app.use(ExceptionsHandler)

app.listen(API_PORT)

export {app}
