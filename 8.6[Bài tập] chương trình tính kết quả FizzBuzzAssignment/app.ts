export class FizzBuzz {
    static MOT = 1
    static HAI = 2
    static BA = 3
    static BON = 4
    static NAM = 5
    static SAU = 6
    static BAY = 7
    static TAM = 8
    static CHIN = 9
    static MUOI = 10

    public _data: number

    constructor(data: number) {
        this._data = data;
    }

    checkInputData (){
        return this._data < 100 && this._data > 0
    }

    converData() {
        let listData = this._data.toString().split("")
        let result = ""
        listData.forEach(number => {
            switch (Number(number)) {
                case FizzBuzz.MOT:
                    result += "một ";
                    break;
                case FizzBuzz.HAI:
                    result += "Hai ";
                    break;
                case FizzBuzz.BA:
                    result += "Ba "
                    break;
                case FizzBuzz.BON:
                    result += "Bốn "
                    break;
                case FizzBuzz.NAM:
                    result += "Năm "
                    break;
                case FizzBuzz.SAU:
                    result += "Sáu ";
                    break;
                case FizzBuzz.BAY:
                    result += "Bẩy ";
                    break;
                case FizzBuzz.TAM:
                    result += "Tám "
                    break;
                case FizzBuzz.CHIN:
                    result += "Chín "
                    break;
                case FizzBuzz.MUOI:
                    result += "Mười "
            }
        })
        return result
    }

    showingResult() {
        if (!this.checkInputData()){
            return "Input Data is Invalid"
        }
        let Fizz = this._data % 3 == 0 || this.containThree()
        let Buzz = this._data % 5 == 0 || this.containFive()
        let FizzBuzz = this._data % 5 == 0 && this._data % 3 == 0
        let result = ''
        if (FizzBuzz) {
           return result = "FizzBuzz"
        }
        if (Buzz) {
            return result = "Buzz"
        }
        if (Fizz) {
            return result = "Fizz"
        }
        if (!FizzBuzz){
           return result = this.converData()
        }
    }

    containThree() {
        let dataContainThree: string[] = this._data.toString().split("")
        let result = false
        dataContainThree.forEach(element => {
            if (Number(element) == 3) {
               result = true
            }
        })
        return result
    }

    containFive() {
        let dataContainFive: string[] = this._data.toString().split("")
        let result = false
        dataContainFive.forEach(element => {
            if (Number(element) == 5) {
                result =  true
            }
        })
        return result
    }
}


