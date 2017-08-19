import stateStore from "./stateStore";

const inputNumber = (number) => {
	if (stateStore.numberInput1 !== "" && stateStore.numberInput2 == "") {
		stateStore.numberInput2 = number;
	}
	else if (stateStore.numberInput1 == "") {
		stateStore.numberInput1 = number;
	}
	else {
		calculate();
		stateStore.numberInput1 = stateStore.result;
		stateStore.numberInput2 = number;
	}
};

const inputMethod = (sign) => {
	if (stateStore.method !== "")  {
		calculate();
		stateStore.numberInput1 = stateStore.result;
		stateStore.method=`${sign}`;
	}
	else {
		if (stateStore.numberInput1 == "" && stateStore.result !== "") {
			stateStore.numberInput1 = stateStore. result;
		} 
		switch(sign) {
		case "+":
			stateStore.method="+";
			break;
		case "-":
			stateStore.method="-";
			break;
		case "*":
			stateStore.method="*";
			break;
		case "/":
			stateStore.method="/";
			break;
		default:
			console.log("inputMethod switch in Input broken");
		}
	}
};

const deleted = () => {
	if (stateStore.numberInput2 == "" && stateStore.method == "") {
		stateStore.numberInput1 = "";
	} else if (stateStore.numberInput2 == "" && stateStore.method !== "" ) {
		stateStore.method = "";
	} else stateStore.numberInput2 = "";
};

const clear = () => {
	stateStore.numberInput1 = "";
	stateStore.numberInput2 = "";
	stateStore.method = "";
	stateStore.result = "";
};

const calculate = () => {
	if (stateStore.method == "+") {
		stateStore.result = stateStore.numberInput1 + stateStore.numberInput2;
	}
	else if (stateStore.method == "-") {
		stateStore.result = stateStore.numberInput1 - stateStore.numberInput2;
	}
	else if (stateStore.method == "*") {
		stateStore.result = stateStore.numberInput1 * stateStore.numberInput2;
	}
	else if (stateStore.method == "/") {
		stateStore.result = stateStore.numberInput1 / stateStore.numberInput2;
	} else {
		console.log("No method set or method can't be read from stateStore!");
	}
	stateStore.numberInput1 = "";
	stateStore.numberInput2 = "";
	stateStore.method = "";
};



export { inputNumber, inputMethod, calculate, deleted, clear };