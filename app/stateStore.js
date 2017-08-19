import {observable} from "mobx";
import {observer} from "mobx-react";

class StateStore  {
@observable numberInput1 = ""
@observable numberInput2 = ""
@observable method = ""
@observable result = ""
}

const stateStore = new StateStore();

export default stateStore;