/**
 * Generic class used to create HTTP errors ( 400 and 404)
 */
import {ApiException} from "../types/exceptions";

class Exception implements ApiException {
    constructor(readonly error: any, readonly status: number) {}
}

/**
 * Creation 404
 */
export class NotFoundException extends Exception {
    /**
     * Call the `constructor` of the parent class `Exception`
     */
    constructor(error: any) {
        super(error, 404)
    }
}

/**
 * Creation 400
 */
export class BadRequestException extends Exception {
    /**
     * Call the `constructor` of the parent class `Exception`
     */
   constructor(error: any) {
       super(error, 400)
    }
}
