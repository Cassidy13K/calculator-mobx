import React, {Component} from "react";
import {observer} from "mobx-react";
import stateStore from "./stateStore";
import {Title} from "./style";
import Input from "./Input";
import Output from "./Output";
import { inputNumber, inputMethod, calculate }from "./StoreModifiers";

@observer
class MainPage extends Component {

	// TODO: recognizes pressed key but except for enter nothing happens
	// TODO: only recognizes key if input1 not empty
	keyboardNumber(key) {
		// if (key == "Enter") {
		// 	Input.calculate();
		// }

		switch(key) {
		case 13:
			calculate();
			break;
		
		case 0:
			inputNumber(0);
			break;
		case 1:
			inputNumber(1);
			break;
		case 2:
			inputNumber(2);
			break;
		case 3:
			inputNumber(3);
			break;
		case 4:
			inputNumber(4);
			break;
		case 5:
			inputNumber(5);
			break;
		case 6:
			inputNumber(6);
			break;
		case 7:
			inputNumber(7);
			break;
		case 8:
			inputNumber(8);
			break;
		case 9:
			inputNumber(9);
			break;

		case 43:
			inputMethod("+");
			break;
		case 45:
			inputMethod("-");
			break;
		case 42:
			inputMethod("*");
			break;
		case 47:
			inputMethod("/");
			break;
		default:
			console.log("something broke switch keyboardNumber");
			break;
		} 
		console.log("testing keyboardNumber: " + key);
	}
	

	render () {
		return (
			<div className="MainPage" onKeyPress={(event) => this.keyboardNumber(event.key)} >
				<Title>Calculator</Title>
				<Input />
				<Output />
			</div>
		);
	}
}



export default MainPage;