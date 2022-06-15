"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
// type newCalcAnswerType = 'Y' | 'y' | 'N' | 'n';
var main = function () {
    var firstStr = (0, readline_sync_1.question)('\nEnter first number: ');
    var operator = (0, readline_sync_1.question)('Enter operator [+, -, *,]: ');
    var secondStr = (0, readline_sync_1.question)('Enter second number: ');
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log('\nAnswer: ' + result);
    }
    else {
        console.log('\nInvalid input. You dissapoint me, human.\n');
        return;
    }
    var newCalcQuestion = (0, readline_sync_1.question)('\nNew calculation? [Y/n]\n');
    newCalc(newCalcQuestion);
};
var newCalc = function (str) {
    switch (str) {
        case 'Y':
        case 'y':
            console.log('\nExcellent choice, human!');
            main();
        case 'N':
        case 'n':
            console.log('\nFine, do your own math.');
            console.log('Goodbye, human.');
    }
};
var isNumber = function (str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
};
var isOperator = function (operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
};
var calculate = function (firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
};
main();
