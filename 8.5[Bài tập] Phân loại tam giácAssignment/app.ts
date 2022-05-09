export class TriangleClassifier {
    a: number
    b: number
    c: number

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    checkingTriangle(){
        if (this.a + this.b > this.c &&
                this.a + this.c > this.b &&
                this.c+ this.b > this.a) {
            return false;
        }
        if ( this.a <=0 && this.b <=0 && this.c <=0){
            return false;
        }
        return true
    }

    refactor(){
        if (this.checkingTriangle()){
            return "không phải là tam giác"
        }
        if (this.a == this.b && this.b == this.c){
            return "tam giác đều"
        }
        if(this.a == this.b && this.b !== this.c ||
            this.c == this.b && this.b !== this.a ||
            this.c == this.a && this.a !== this.b) {
            return "tam giác cân"
        }
        if(this.a > 0 && this.b > 0 && this.c > 0 ){
            return "tam giác thường"
        }
    }
}



