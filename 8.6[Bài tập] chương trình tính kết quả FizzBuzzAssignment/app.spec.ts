import {FizzBuzz} from "./app";


describe('checking FizzBuzz ', () => {

    test('should return Fizz', () => {
    let FizzBuzzVariable: FizzBuzz = new FizzBuzz(3);
        expect(FizzBuzzVariable.showingResult()).toBe("Fizz");
    });

    test('should return Buzz', () => {
        let FizzBuzzVariable: FizzBuzz = new FizzBuzz(5);
        expect(FizzBuzzVariable.showingResult()).toBe("Buzz");
    });

    test('should return FizzBuzz', () => {
        let FizzBuzzVariable: FizzBuzz = new FizzBuzz(15);
        expect(FizzBuzzVariable.showingResult()).toBe("FizzBuzz");
    });

    test('should return Fizz', () => {
        let FizzBuzzVariable: FizzBuzz = new FizzBuzz(13);
        expect(FizzBuzzVariable.showingResult()).toBe("Fizz");
    });

    test('should return Buzz', () => {
        let FizzBuzzVariable: FizzBuzz = new FizzBuzz(54);
        expect(FizzBuzzVariable.showingResult()).toBe("Buzz");
    });

    test('should return string number', () => {
        let FizzBuzzVariable: FizzBuzz = new FizzBuzz(47);
        expect(FizzBuzzVariable.showingResult()).toBe("Bốn Bẩy ");
    });
});