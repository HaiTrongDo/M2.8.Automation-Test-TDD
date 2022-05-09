import {TriangleClassifier} from "./app";


describe('triangle Testing', () => {

    test('should return an type of triangle', () => {
    let triangleType: TriangleClassifier = new TriangleClassifier(2,2,2);
        expect(triangleType.refactor()).toBe("tam giác đều");
    });


    test('should return an type of triangle', () => {
        let triangleType: TriangleClassifier = new TriangleClassifier(2,2,3);
        expect(triangleType.refactor()).toBe("tam giác cân");
    });

    test('should return an type of triangle', () => {
        let triangleType: TriangleClassifier = new TriangleClassifier(3,4,5);
        expect(triangleType.refactor()).toBe("tam giác thường");
    });

    test('should return an type of triangle', () => {
        let triangleType: TriangleClassifier = new TriangleClassifier(8,2,3);
        expect(triangleType.refactor()).toBe("không phải là tam giác");
    });

    test('should return an type of triangle', () => {
        let triangleType: TriangleClassifier = new TriangleClassifier(-1,2,1);
        expect(triangleType.refactor()).toBe("không phải là tam giác");
    });

    test('should return an type of triangle', () => {
        let triangleType: TriangleClassifier = new TriangleClassifier(0,1,1);
        expect(triangleType.refactor()).toBe("không phải là tam giác");
    });

});