import {BTTF_PRICE, BTTF_TITLES, OTHER_MOVIE_PRICE} from "../../utils/constant";


export class DvdService {


    constructor() {
    }

    /**
     * post  calculate '
     * @param {string []} dvd
     */

    calculateTotalPrice = (list: string[]) => {

        const items = list;
        if (!list.length) return 0;

        // Filter the items to get only "Back to the Future"
        const bttfItems: string[] = items.filter(item => BTTF_TITLES.includes(item));
        // Filter the items to get only other DVD
        const otherItems: string[] = items.filter(item => !BTTF_TITLES.includes(item));

        const bttfCount = new Set(bttfItems).size;
        //calculate discount
        let discount = 0;
        if (bttfCount === 2) {
            discount = 0.10;// 10% discount
        } else if (bttfCount >= 3) {
            discount = 0.20; // 20% discount
        }

        // Calculate the total price  without discount
        const bttfTotal = bttfItems.length * BTTF_PRICE;
        const otherTotal = otherItems.length * OTHER_MOVIE_PRICE;
        //Calculate the total price after applying the discount
        const totalAfterDiscount = (bttfTotal * (1 - discount)) + otherTotal;
        return parseFloat(totalAfterDiscount.toFixed(2));
    }


}

