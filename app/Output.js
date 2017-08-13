import React, {Component} from "react";
import {observer} from "mobx-react";
import {computed} from "mobx";
import stateStore from "./stateStore";
import {P} from "./style";

@computed
class Output extends Component {
	constructor(props) {
		super(props);
	}

	
	render() {
		return (
			<div className="Output">Output placeholder
				<P className="Calculation" >Calculation: {stateStore.numberInput1} {stateStore.method} {stateStore.numberInput2}</P>
				<P className="Result">Your result is: {stateStore.result}</P>
			</div>
		);
	}
}

export default Output;