/**
 * For all other undefined routes, an error is returned
 */
import {NotFoundException} from "../utils/exceptions";

export const UnknownRoutesHandler = () => {
    throw new NotFoundException(`not found 404`)
}
