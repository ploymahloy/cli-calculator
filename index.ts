import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';
const logo = `.g8"""bgd \`7MMF'      \`7MMF'      .g8"""bgd         \`7MM                     \`7MM           mm                   
.dP'     \`M   MM          MM      .dP'     \`M           MM                       MM           MM                   
dM'       \`   MM          MM      dM'       \` ,6"Yb.    MM  ,p6"bo \`7MM  \`7MM    MM   ,6"Yb.mmMMmm ,pW"Wq.\`7Mb,od8 
MM            MM          MM      MM         8)   MM    MM 6M'  OO   MM    MM    MM  8)   MM  MM  6W'   \`Wb MM' "' 
MM.           MM      ,   MM      MM.         ,pm9MM    MM 8M        MM    MM    MM   ,pm9MM  MM  8M     M8 MM     
\`Mb.     ,'   MM     ,M   MM      \`Mb.     ,'8M   MM    MM YM.    ,  MM    MM    MM  8M   MM  MM  YA.   ,A9 MM     
  \`"bmmmd'  .JMMmmmmMMM .JMML.      \`"bmmmd' \`Moo9^Yo..JMML.YMbmd'   \`Mbod"YML..JMML.\`Moo9^Yo.\`Mbmo\`Ybmd9'.JMML.`;

const main = (): void => {
	const firstStr: string = question('\nEnter first number: ');
	const operator: string = question('Enter operator [+, -, *, /]: ');
	const secondStr: string = question('Enter second number: ');

	const validInput: boolean =
		isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

	if (validInput) {
		const firstNum: number = parseInt(firstStr);
		const secondNum: number = parseInt(secondStr);
		const result = calculate(firstNum, operator as Operator, secondNum);
		console.log('\nAnswer: ' + result);
	} else {
		console.log('\nInvalid input. You dissapoint me, human.');
		return;
	}

	replay();
};

const replay = (): void => {
	const newCalc: string = question('\nNew calculation? [Y/n] ');

	switch (newCalc) {
		case 'Y':
		case 'y':
			main();
			break;
		default:
			console.log('\nFine. Do your own math, human.');
			break;
	}
	return;
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

console.log('\n' + logo);
main();
