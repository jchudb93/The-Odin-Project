const add = (a,b) => {return a+b;}
const substract = (a,b) => {return a-b}
const multiply = (a,b) => {return a*b}
const divide = (a,b) => {return a/b}
const percent = (a) => {return a/100}
const sign = (a) => {return a * -1}
const operate = (operator, a ,b) => {
	return operator(a,b);
}
const modify = (operator,a) => {
	return operator(a);
}

const numbers = document.querySelectorAll(".num");
const screen = document.querySelector("#values");
let numbersDisplay = "";
let total;
let operatorStore;
let operatorActivated = false;
let evaluated = false;
let decimalActivated = false;

let resetFunctions = () => {
	numbersDisplay = "";
	total = undefined;
	operatorActivated = false;
	operatorDisplay.textContent = "";
	evaluated = false;
	screen.textContent = "0";
}

let changeDisplay = (e) => {
	let num = e.target.textContent;
	if(num == 'CE'){
		resetFunctions();
	}
	else{
		if(numbersDisplay.includes('.') && num == '.'){return ;}
		if(numbersDisplay == '0'){numbersDisplay ='';}
		if(operatorActivated){
			numbersDisplay = '';
			operatorActivated = false;
		}
		else if(evaluated){
			resetFunctions
		}
		numbersDisplay += num;
		screen.textContent = numbersDisplay;
	}
}

var operators = document.querySelector(".operator");
const operatorDisplay = document.querySelector("#operatorDisplay");
const decimal = document.querySelector(".dec");

let handleOperator = (e) => {
	operatorDisplay.textContent = e.target.textContent;
	if(!operatorActivated){
		let operatorType = e.target.textContent;
		if (total == undefined){
			total = Number(numbersDisplay);
			operatorStore = operatorType;
			operatorActivated = true;
		}
		else{
			if(operatorType == "="){
				let newNum = Number(numbersDisplay);
				let eva;
				switch(operatorStore){
					case "+":
						eval = add;
						break;
					case "-":
						eval = substract;
						break;
					case "x":
						eval = multiply;
						break;
					case "÷":
						eval = divide;
						break;
					case "+/-":
						eval = sign;
						break;
					case "%":
						eval = percent;
						break;
				}
				if (operatorStore == "%" || operatorStore =="+/-"){
					total = modify(eval,total);
				}
				total = operate(eval, total, newNum);
				screen.textContent = total;
				operatorActivated = false;
				evaluated = true;
			}
			else {
				if(evaluated == true){
					operatorActivated = true;
					operatorStore = operatorType;
					evaluated = false;
				}
				else {
					let newNum = Number(numbersDisplay);
					let eval;
					switch(operatorStore){
						case "+":
							eval = add;
							break;
						case "-":
							eval = substract;
							break;
						case "x":
							eval = multiply;
							break;
						case "÷":
							eval = divide;
							break;
						case "+/-":
							eval = sign;
							break;
						case "%":
							eval = percent;
							break;
					}
					if (operatorStore == "%" || operatorStore =="+/-"){
						total = modify(eval,total);
					}
					total = operate(eval, total, newNum);
					screen.textContent = total;
					operatorActivated = true;
					operatorStore = operatorType;
				}
			}
		}
	}
}

numbers.forEach(number => number.addEventListener("click", changeDisplay));
/*operators.forEach(operator => opertor.addEventListener("click",handleOperator));*/

document.addEventListener("DOMContentLoaded", function(event) { 
  		for ( i=0; i< operators.length; i++){
			operators[i].addEventListener("click",handleOperator);
		}
			return;
});
