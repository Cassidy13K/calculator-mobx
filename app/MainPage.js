import React, {Component} from "react";
import {observer} from "mobx-react";
import stateStore from "./stateStore";
import {Title} from "./style";
import Input from "./Input";
import Output from "./Output";

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
			Input.calculate();
			break;
		
		case 0:
		case 48:
			Input.inputNumber(0);
			break;
		case 1:
			Input.inputNumber(1);
			break;
		case 2:
			Input.inputNumber(2);
			break;
		case 3:
			Input.inputNumber(3);
			break;
		case 4:
			Input.inputNumber(4);
			break;
		case 5:
			Input.inputNumber(5);
			break;
		case 6:
			Input.inputNumber(6);
			break;
		case 7:
			Input.inputNumber(7);
			break;
		case 8:
			Input.inputNumber(8);
			break;
		case 9:
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