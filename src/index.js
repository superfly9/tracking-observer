import ObjectObs from "./object-observer.js";
import PrimitiveObs from "./primitive-observer.js";
import State from './state.js';

let objectObserver = new ObjectObs();
let primitiveObserver = new PrimitiveObs();

//숫자 정보를 담고 있는 객체
let state = new State(5);
state.add(objectObserver,primitiveObserver);
state.changeProperty(10); // { type: 'value change', before: 5, after: 10 }
state.changeProperty(10); // { type: 'no change', before: 10, after: 10 }
state.changeProperty('a') // { type: 'value change', before: 10, after: 'a' }


// 초기에 사용할 배열 설정
state.setProperty(['seoul','lite','hi']); // change state initial Value
//인덱스 변화
state.changeProperty(['lite','seoul','hi']) 
//{ type: 'Index changed',before: [ 'seoul', 'lite', 'hi' ],after: [ 'lite', 'seoul', 'hi' ]}

state.setProperty(['seoul','lite','hi']); 

//배열의 요소 추가
state.changeProperty(['seoul','lite','hi','awesome']); 
// {type: 'added', addedValue: [ 'awesome' ], before: [ 'seoul', 'lite', 'hi' ], after: [ 'seoul', 'lite', 'hi', 'awesome' ]}

//배열 요소 제거
state.changeProperty(['seoul']);
// { type: 'removed', removedValue: [ 'lite', 'hi', 'awesome' ],before: [ 'seoul', 'lite', 'hi', 'awesome' ], after: [ 'seoul' ]}

//초기에 사용할 객체 설정
state.setProperty({a:1,b:2});
//객체 프로퍼티 변화
state.changeProperty({a:'Hello',b:2});
//{  type: 'Property changed',before: { a: 1, b: 2 },after: { a: 'Hello', b: 2 }}

//객체 프로퍼티 추가
state.changeProperty({a:'Hello',b:2,c:'good',d:'thank you'});
//{ type: 'added', addedValue: [ 'good', 'thank you' ], before: { a: 'Hello', b: 2 }, after: { a: 'Hello', b: 2, c: 'good', d: 'thank you' }}

//객체 프로퍼티 삭제
state.changeProperty({a:'Hello',b:2,c:'good'});
//{ type: 'removed', removedValue: [ 'thank you' ],before: { a: 'Hello', b: 2, c: 'good', d: 'thank you' },after: { a: 'Hello', b: 2, c: 'good' }}