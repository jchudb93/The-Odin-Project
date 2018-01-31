const numbers = document.querySelectorAll(".num");
const screen = document.querySelector("#values");
const operatorDisplay = document.querySelector("#operatorDisplay");

let numbersDisplay = "";
let total;
let operatorStore;
let operatorActivated = false;
let evaluated = false;
let decimalActivated = false;
let first_number = true;
let sign = true;

let clear = () => {
	numbersDisplay = "";
	total = 0;
	operatorActivated = false;
	operatorDisplay.textContent = "";
	evaluated = false;
	screen.textContent = "0";
}

let changeDisplay = (e) => {
	let num = e.target.textContent;
	if(num == 'C'){
		clear();
	}
	else{
		if(numbersDisplay.includes('.') && num == '.'){return ;}
		if(numbersDisplay == '0'){numbersDisplay ='';}
		if(operatorActivated){
			numbersDisplay = '';
			operatorDisplay = '';
			operatorActivated = false;
			first_number = true;
		}
		else if(evaluated){
			clear();
		}
		numbersDisplay += num;
		screen.textContent = numbersDisplay;
	}
}


var operators = document.querySelectorAll(".operator");


let handleOperator = (e) =>{
	if(e.target.textContent != "="){
		if(e.target.textContent == "+/-"){
			if(sign){
				numbersDisplay = " - " + numbersDisplay;
				sign = false;
			} else {
				numbersDisplay = " + " + numbersDisplay;
				sign = true 
			}
			
		} else {
			if (e.target.textContent == 'CE'){
				numbersDisplay = '';
			}else {
				operatorDisplay.textContent +=  " " + numbersDisplay + " " +  e.target.textContent;
				numbersDisplay = '';
			}

		}
			
	} else {
			operatorDisplay.textContent +=  " " + numbersDisplay;
			var evaluationString = operatorDisplay.textContent.replace('x','*').replace('÷','/').replace('%','/100')
			console.log(evaluationString);
			operatorDisplay.textContent += " = " + eval(evaluationString);
			evaluated = true;
			numbersDisplay = '';

	}
	screen.textContent = numbersDisplay;
}

for ( i=0; i< operators.length; i++){
	operators[i].addEventListener("click",handleOperator);
}

numbers.forEach(number => number.addEventListener("click", changeDisplay));