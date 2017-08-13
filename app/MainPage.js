import React, {Component} from "react";
import {observer} from "mobx-react";
import stateStore from "./stateStore";
import {Title} from "./style";
import Input from "./Input";
import Output from "./Output";

@observer
class MainPage extends Component {

	keyboardNumber(key) {
		// if (key == "Enter") {
		// 	stateStore.calculate();
		// }

		switch(key) {
		case 13:
			stateStore.calculate();
			break;

		case 48:
			Input.inputNumber(0);
			break;
		case 49:
			Input.inputNumber(1);
			break;
		case 50:
			Input.inputNumber(2);
			break;
		case 51:
			Input.inputNumber(3);
			break;
		case 52:
			Input.inputNumber(4);
			break;
		case 53:
			Input.inputNumber(5);
			break;
		case 54:
			Input.inputNumber(6);
			break;
		case 55:
			Input.inputNumber(7);
			break;
		case 56:
			Input.inputNumber(8);
			break;
		case 57:
			Input.inputNumber(9);
			break;

		case 43:
			stateStore.method = "+";
			break;
		case 45:
			stateStore.method = "-";
			break;
		case 42:
			stateStore.method = "*";
			break;
		case 47:
			stateStore.method = "/";
			break;
		}
	}

	render () {
		return (
			<div className="MainPage" onKeyPress={(key) => this.keyboardNumber(key)} >
				<Title>Calculator</Title>
				<Input />
				<Output />
			</div>
		);
	}
}



export default MainPage;