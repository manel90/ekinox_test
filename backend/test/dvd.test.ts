

import {DvdService} from "../src/resources/dvd/dvd.service";
const service = new DvdService()


describe('calculateTotal', () => {

    test('should return correct total price without discount', () => {
        const list = ["Back to the Future 1", "Another Movie"];
        expect(service.calculateTotalPrice(list)).toBe(35); // 15 (BTTF) + 20 (Other)
    });

    test('should return correct total price with 10% discount for 2 different BTTF titles', () => {
        const list = ["Back to the Future 1", "Back to the Future 2"];
        expect(service.calculateTotalPrice(list)).toBe(27); // 30 * 0.9
    });

    test('should return correct total price with 20% discount for 3 different BTTF titles', () => {
        const list = ["Back to the Future 1", "Back to the Future 2", "Back to the Future 3"];
        expect(service.calculateTotalPrice(list)).toBe(36); // 45 * 0.8
    });

    test('should handle mixed BTTF and other movies with discount', () => {
        const list = ["Back to the Future 1", "Back to the Future 2", "Another Movie"];
        expect(service.calculateTotalPrice(list)).toBe(47); // 30 * 0.9 + 20
    });

    test('should handle no BTTF movies', () => {
        const list = ["Another Movie", "Another Movie"];
        expect(service.calculateTotalPrice(list)).toBe(40); // 20 + 20
    });

    test('should handle empty list', () => {
        const list: string[] = [];
        expect(service.calculateTotalPrice(list)).toBe(0); // 0
    });
});
