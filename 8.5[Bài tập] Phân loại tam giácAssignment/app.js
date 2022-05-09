"use strict";
exports.__esModule = true;
exports.TriangleClassifier = void 0;
var TriangleClassifier = /** @class */ (function () {
    function TriangleClassifier(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    TriangleClassifier.prototype.checkingTriangle = function () {
        if (this.a + this.b > this.c &&
            this.a + this.c > this.b &&
            this.c + this.b > this.a) {
            return false;
        }
        if (this.a <= 0 && this.b <= 0 && this.c <= 0) {
            return false;
        }
        return true;
    };
    TriangleClassifier.prototype.refactor = function () {
        if (this.checkingTriangle()) {
            return "không phải là tam giác";
        }
        if (this.a == this.b && this.b == this.c) {
            return "tam giác đều";
        }
        if (this.a == this.b && this.b !== this.c ||
            this.c == this.b && this.b !== this.a ||
            this.c == this.a && this.a !== this.b) {
            return "tam giác cân";
        }
        if (this.a > 0 && this.b > 0 && this.c > 0) {
            return "tam giác thường";
        }
    };
    return TriangleClassifier;
}());
exports.TriangleClassifier = TriangleClassifier;
