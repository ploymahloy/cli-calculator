import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';
// type newCalcAnswerType = 'Y' | 'y' | 'N' | 'n';

const main = (): void => {
	const firstStr: string = question('\nEnter first number: ');
	const operator: string = question('Enter operator [+, -, *,]: ');
	const secondStr: string = question('Enter second number: ');

	const validInput: boolean =
		isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

	if (validInput) {
		const firstNum: number = parseInt(firstStr);
		const secondNum: number = parseInt(secondStr);
		const result = calculate(firstNum, operator as Operator, secondNum);
		console.log('\nAnswer: ' + result);
	} else {
    console.log('\nInvalid input. You dissapoint me, human.\n');
		return;
  }
  
  const newCalcQuestion: string = question('\nNew calculation? [Y/n]\n');
  newCalc(newCalcQuestion);
};

const newCalc = (str: string): void => {
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

const isNumber = (str: string): boolean => {
	const maybeNum = parseInt(str);
	const isNum: boolean = !isNaN(maybeNum);
	return isNum;
};

const isOperator = (operator: string): boolean => {
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

const calculate = (
	firstNum: number,
	operator: Operator,
	secondNum: number
): number => {
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