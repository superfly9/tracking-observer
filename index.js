import ObjectObs from "./object-observer.js";
import PrimitiveObs from "./primitive-observer.js";
import State from './state.js';

let objectObserver = new ObjectObs();
let primitiveObserver = new PrimitiveObs();
//숫자 정보를 담고 있는 객체
let state = new State(5);
state.add(objectObserver,primitiveObserver);
// state.changeProperty(10); // { type: 'value change', before: 5, after: 10 }
// state.changeProperty(10); // { type: 'no change', before: 10, after: 10 }
// state.changeProperty('a') // { type: 'value change', before: 10, after: 'a' }

//setProperty(property change)도 할 수 있게 해줘야

state.setProperty(['seoul','lite']); // change state initial Value
state.changeProperty(['seoul','lite','awesome']);
state.changeProperty(['seoul']);


//state.changeProperty => state.update
//=> subject.notify
//=> PrimitiveObs.update => Primitive render(결과값)
//state class가 primitiveObs의 결과값을 사용하려면?