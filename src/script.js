'use strict'

const buttons = document.querySelectorAll('.button');
const output = document.querySelector('.output');
const out_Mem = document.querySelector('.out_mem');
const clear = document.querySelector('.Clear');
const equals = document.querySelector('.Equals');
const sum = document.querySelector('.Sum');
const division = document.querySelector('.Division');
const multiply = document.querySelector('.Multiply');
const difference = document.querySelector('.Difference');

let result = 0;
let flag_Sum = false;
let flag_Diff = false;
let flag_Div = false;
let flag_Mul = false;
let flag_Change_Number = false;
let str = ''

for (let button of buttons) {
    button.onclick = function () {
        if (output.innerHTML.indexOf("0") === 0 ) {
            output.innerHTML = output.innerHTML.slice(1)
        }
        if (flag_Change_Number){
            str = ""
            flag_Change_Number = false
        }

        str += button.innerHTML;
        output.innerHTML = str;

        let string = output.innerHTML;
        sum.onclick = function () {
            out_Mem.innerHTML += str + "+";
            evaluateExpression(string);
            flag_Sum = true;
        }

        difference.onclick = function () {
            out_Mem.innerHTML += str + "-";
            evaluateExpression(string);
            flag_Diff = true;
        }

        division.onclick = function () {
            out_Mem.innerHTML += str + "/";
            evaluateExpression(string);
            flag_Div = true;
        }

        multiply.onclick = function () {
            out_Mem.innerHTML += str + "*";
            evaluateExpression(string);
            flag_Mul = true;

        }
        equals.onclick = function () {
            if (out_Mem.innerHTML.lastIndexOf("=") !== -1){

            } else {
                out_Mem.innerHTML += str + "=";
            }
            evaluateExpression(string);
        }
        clear.onclick = function () {
            str = "0";
            output.innerHTML = str;
            out_Mem.innerHTML = "";
            result = 0;
        };
    }
}



function evaluateExpression(string){
    if (flag_Diff) {
        result -= Number(string);
        flag_Diff = false;
    } else if (flag_Sum) {
        result += Number(string);
        flag_Sum = false;
    } else if (flag_Div) {
        result /= Number(string);
        console.log(result);
        flag_Div = false;
    } else if (flag_Mul) {
        result *= Number(string);
        flag_Mul = false;
    } else if (result === 0) {
        result = Number(string);
    }
    str = result;
    output.innerHTML = str;
    flag_Change_Number = true;
}