import {NextDayCalculator} from "./app";

describe('BasicCalulator Testing', () => {

    test('should return an instance of a basic calculator', () => {
    let nexday: NextDayCalculator = new NextDayCalculator("2018", "1", "1");
        expect(nexday.nextDate()).toEqual("1/2/2018");
    });

    test('should return an instance of a basic calculator', () => {
        let nexday: NextDayCalculator = new NextDayCalculator("2018", "1", "31");
        expect(nexday.nextDate()).toEqual("2/1/2018");
    });

    test('should return an instance of a basic calculator', () => {
        let nexday: NextDayCalculator = new NextDayCalculator("2018", "4", "30");
        expect(nexday.nextDate()).toEqual("5/1/2018");
    });

    test('should return an instance of a basic calculator', () => {
        let nexday: NextDayCalculator = new NextDayCalculator("2018", "2", "28");
        expect(nexday.nextDate()).toEqual("3/1/2018");
    });

    test('should return an instance of a basic calculator', () => {
        let nexday: NextDayCalculator = new NextDayCalculator("2020", "2", "29");
        expect(nexday.nextDate()).toEqual("3/1/2020");
    });

    test('should return an instance of a basic calculator', () => {
        let nexday: NextDayCalculator = new NextDayCalculator("2018", "12", "31");
        expect(nexday.nextDate()).toEqual("1/1/2019");
    });

});