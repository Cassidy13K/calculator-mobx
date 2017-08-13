import {observable} from "mobx";
import {observer} from "mobx-react";

class StateStore  {
@observable numberInput1 = ""
@observable numberInput2 = ""
@observable method = ""
@observable result = ""


	@observer
	calculate(method) {
		if (method == "+") {
			this.result = this.numberInput1 + this.numberInput2;
		}
		else if (method == "-") {
			this.result = this.numberInput1 - this.numberInput2;
		}
		else if (method == "*") {
			this.result = this.numberInput1 * this.numberInput2;
		}
		else if (method == "/") {
			this.result = this.numberInput1 / this.numberInput2;
		}
	}

}

const stateStore = new StateStore();

export default stateStore;