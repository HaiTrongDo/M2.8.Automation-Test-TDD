"use strict";
exports.__esModule = true;
exports.FizzBuzz = void 0;
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz(data) {
        this._data = data;
    }
    FizzBuzz.prototype.checkInputData = function () {
        return this._data < 100 && this._data > 0;
    };
    FizzBuzz.prototype.converData = function () {
        var listData = this._data.toString().split("");
        var result = "";
        listData.forEach(function (number) {
            switch (Number(number)) {
                case FizzBuzz.MOT:
                    result += "một ";
                    break;
                case FizzBuzz.HAI:
                    result += "Hai ";
                    break;
                case FizzBuzz.BA:
                    result += "Ba ";
                    break;
                case FizzBuzz.BON:
                    result += "Bốn ";
                    break;
                case FizzBuzz.NAM:
                    result += "Năm ";
                    break;
                case FizzBuzz.SAU:
                    result += "Sáu ";
                    break;
                case FizzBuzz.BAY:
                    result += "Bẩy ";
                    break;
                case FizzBuzz.TAM:
                    result += "Tám ";
                    break;
                case FizzBuzz.CHIN:
                    result += "Chín ";
                    break;
                case FizzBuzz.MUOI:
                    result += "Mười ";
            }
        });
        return result;
    };
    FizzBuzz.prototype.showingResult = function () {
        if (!this.checkInputData()) {
            return "Input Data is Invalid";
        }
        var Fizz = this._data % 3 == 0 || this.containThree();
        var Buzz = this._data % 5 == 0 || this.containFive();
        var FizzBuzz = this._data % 5 == 0 && this._data % 3 == 0;
        var result = '';
        if (FizzBuzz) {
            return result = "FizzBuzz";
        }
        if (Buzz) {
            return result = "Buzz";
        }
        if (Fizz) {
            return result = "Fizz";
        }
        if (!FizzBuzz) {
            return result = this.converData();
        }
    };
    FizzBuzz.prototype.containThree = function () {
        var dataContainThree = this._data.toString().split("");
        var result = false;
        dataContainThree.forEach(function (element) {
            if (Number(element) == 3) {
                result = true;
            }
        });
        return result;
    };
    FizzBuzz.prototype.containFive = function () {
        var dataContainFive = this._data.toString().split("");
        var result = false;
        dataContainFive.forEach(function (element) {
            if (Number(element) == 5) {
                result = true;
            }
        });
        return result;
    };
    FizzBuzz.MOT = 1;
    FizzBuzz.HAI = 2;
    FizzBuzz.BA = 3;
    FizzBuzz.BON = 4;
    FizzBuzz.NAM = 5;
    FizzBuzz.SAU = 6;
    FizzBuzz.BAY = 7;
    FizzBuzz.TAM = 8;
    FizzBuzz.CHIN = 9;
    FizzBuzz.MUOI = 10;
    return FizzBuzz;
}());
exports.FizzBuzz = FizzBuzz;
