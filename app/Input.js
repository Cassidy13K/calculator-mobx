import React, {Component} from "react";
import {observer} from "mobx-react";
import stateStore from "./stateStore";
import {Button, InputDiv} from "./style";

class Input extends Component {
	constructor(props) {
		super(props);
	}

	repeat (number) {
		return (
			Array.from(Array(number)).map((value, index) => index)
		);
	}

	numberGenerator(number) {
		return (
			<Button key={number} className={`numberButton_${number}`} onClick={() => this.inputNumber(number)}>{number}</Button>
		);
	}

	inputNumber(number) {
		if (stateStore.numberInput1 !== "" && stateStore.numberInput2 == "") {
			stateStore.numberInput2 = number;
		}
		else if (stateStore.numberInput1 == "") {
			stateStore.numberInput1 = number;
		}
		else {
			this.calculate();
			stateStore.numberInput1 = stateStore.result;
			stateStore.numberInput2 = number;
		}
	}

	inputMethod(sign) {
		if (stateStore.method !== "")  {
			this.calculate();
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
	}

	delete() {
		if (stateStore.numberInput2 == "" && stateStore.method == "") {
			stateStore.numberInput1 = "";
		} else if (stateStore.numberInput2 == "" && stateStore.method !== "" ) {
			stateStore.method = "";
		} else stateStore.numberInput2 = "";
	}

	clear() {
		stateStore.numberInput1 = "";
		stateStore.numberInput2 = "";
		stateStore.method = "";
		stateStore.result = "";
	}

	calculate() {
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
	}

	render() {
		return (
			<div>
				<InputDiv className="Input">
					<div className="number-input">{this.repeat(10).map(number => this.numberGenerator(number))}</div>
					<div className="method-input">
						<Button onClick={() => this.inputMethod("+")}>+</Button>
						<Button onClick={() => this.inputMethod("-")}>-</Button>
						<Button onClick={() => this.inputMethod("*")}>*</Button>
						<Button onClick={() => this.inputMethod("/")}>/</Button>

						<Button onClick={() => this.calculate()}>=</Button>
						<Button onClick={() => this.delete()}>DEL</Button>
						<Button onClick={() => this.clear()}>CLEAR</Button>
					</div>
				</InputDiv>
			</div>
		);
	}
}

export default Input;