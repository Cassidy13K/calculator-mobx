import React, {Component} from "react";
import {observer} from "mobx-react";
import stateStore from "./stateStore";
import {Button} from "./style";

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
			stateStore.calculate();
			stateStore.numberInput1 = stateStore.result;
			stateStore.numberInput2 = number;
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

	render() {
		return (
			<div className="Input">Input placeholder
				<div className="number-input">{this.repeat(10).map(number => this.numberGenerator(number))}</div>
				<div className="method-input">
					<Button onClick={() => stateStore.method="+"}>+</Button>
					<Button onClick={() => stateStore.method="-"}>-</Button>
					<Button onClick={() => stateStore.method="*"}>*</Button>
					<Button onClick={() => stateStore.method="/"}>/</Button>

					<Button onClick={stateStore.calculate()}>=</Button>
					<Button onClick={this.delete()}>DEL</Button>
					<Button onClick={this.clear()}>CLEAR</Button>
				</div>
			</div>
		);
	}
}

export default Input;