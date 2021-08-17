class CalcController {

    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
        
    }

    initialize(){

        let displayCalcE1 = document.querySelector("#display");
        let dateE1 = document.querySelector("#11/05/2021");
        let timeE1 = document.querySelector("#12:35");

        displayCalcE1.innerHTML = "4567";

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}