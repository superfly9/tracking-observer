#### Observer pattern

what i would do
track of changing value 
1.dont use event or setTimeout
2.매 시행마다 이전 데이터와 현재데이터를 반환해야

Subject=> Observer를 다룸, add,remote,notify기능이 존재, this.observers = [] 통해 옵저버들 목록을 가짐,각각의 옵저버는 데이터 변경을 처리하는 update함수를 가지고 있어야

state=>정보 및 업데이트 함수를 가짐
업데이트 함수 this.notify(data)통해 observer.update(data)실행시킴

value에 따른 state생성 및 state를 observer에 전달
let strState = new State('seoul')
let strState2 = new State('seoul Lite')
이걸 observer 감지 후 update
이 update함수는 입력된 데이터 타입에 따라 다른 동작을 보여줘야

observer => 상태변화를 감지하고 이전 데이터 / 현재데이터를 반환하는 역할
update함수 : state가 전달해주는 데이터를 통해 update하는 로직을 실행해야
다만, 이 전달받는 데이터는 문자/숫자/배열/객체로 다를텐데 이것을 어떻게
구분해서 업데이트함수를 실행할 것인가?

let a = 5;
a =10; 


let arr1 = [a,b,c];
arr1.push('d')

1et obj1 = { a:'1',b:'2'};
obj1.a = 'seoul'