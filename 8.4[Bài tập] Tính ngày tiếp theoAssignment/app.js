"use strict";
exports.__esModule = true;
exports.NextDayCalculator = void 0;
var NextDayCalculator = /** @class */ (function () {
    function NextDayCalculator(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.date = month + "/" + day + "/" + year;
    }
    ;
    NextDayCalculator.prototype.nextDate = function () {
        if (this.checkDate()) {
            var today = new Date(this.date);
            // let tomorrow = new Date(today);
            today.setDate(today.getDate() + 1);
            return today.toLocaleDateString();
        }
        else {
            return "wrong date";
        }
    };
    NextDayCalculator.prototype.checkleapYear = function () {
        return Number(this.year) % 400 == 0 || Number(this.year) % 100 == 0 || Number(this.year) % 4 == 0;
    };
    NextDayCalculator.prototype.checkMonth = function () {
        return Number(this.month) < 13 && Number(this.month) > 0;
    };
    NextDayCalculator.prototype.checkDay = function () {
        var month = Number(this.month);
        var day = Number(this.day);
        if (day < 0)
            return false;
        this.checkFebruarydateValidate();
        if (this.checkMonthesHave31days() && day > NextDayCalculator.MONTH_HAS_31_DAYS) {
            return false;
        }
        if (this.checkMonthesHave30days() && day > NextDayCalculator.MONTH_HAS_30_DAYS) {
            return false;
        }
        return true;
    };
    NextDayCalculator.prototype.checkDate = function () {
        return this.checkMonth() && this.checkDay();
    };
    NextDayCalculator.prototype.checkMonthesHave31days = function () {
        var month = Number(this.month);
        return month == 12 ||
            month == 1 ||
            month == 3 ||
            month == 5 ||
            month == 7 ||
            month == 8 ||
            month == 10;
    };
    NextDayCalculator.prototype.checkMonthesHave30days = function () {
        var month = Number(this.month);
        return month == 4 || month == 6 || month == 9 || month == 11;
    };
    NextDayCalculator.prototype.checkFebruarydateValidate = function () {
        var month = Number(this.month);
        var day = Number(this.day);
        if (this.checkleapYear() && month == 2 && day > 29) {
            return false;
        }
        if (day > 28 && month == 2 && !this.checkleapYear()) {
            return false;
        }
    };
    NextDayCalculator.MONTH_HAS_31_DAYS = 31;
    NextDayCalculator.MONTH_HAS_30_DAYS = 30;
    return NextDayCalculator;
}());
exports.NextDayCalculator = NextDayCalculator;
var a = new NextDayCalculator("2020", "2", "29");
console.log(a.nextDate());
