import React, {Component} from "react";
import {observer} from "mobx-react";
import stateStore from "./stateStore";
import {Button, InputDiv} from "./style";
import { inputNumber, inputMethod, calculate, deleted, clear }from "./StoreModifiers";

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
			<Button key={number} className={`numberButton_${number}`} onClick={() => inputNumber(number)}>{number}</Button>
		);
	}

	render() {
		return (
			<div>
				<InputDiv className="Input">
					<div className="number-input">{this.repeat(10).map(number => this.numberGenerator(number))}</div>
					<div className="method-input">
						<Button onClick={() => inputMethod("+")}>+</Button>
						<Button onClick={() => inputMethod("-")}>-</Button>
						<Button onClick={() => inputMethod("*")}>*</Button>
						<Button onClick={() => inputMethod("/")}>/</Button>

						<Button onClick={() => calculate()}>=</Button>
						<Button onClick={() => deleted()}>DEL</Button>
						<Button onClick={() => clear()}>CLEAR</Button>
					</div>
				</InputDiv>
			</div>
		);
	}
}

export default Input;