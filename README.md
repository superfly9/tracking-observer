## Tracking Observer

### 클래스의 변수로 전달된 값들을 추적하는 옵저버 시스템 구성
- 구성요소
- Subject : Observer를 등록/삭제/상태변화를 알려주는 객체, 즉 Observer를 관리하는 객체 
- State : 상태변화를 인지하고 상태를 업데이트하는 객체, Subject객체를       상속받아온다
   > changeProperty메서드와 업데이트 함수를 통해 상태를 변경 후 
상속받아온 Subject객체의 notify를 통해 옵저버들에게 변화한 상태를 전달

- Observer 
 state의 상태를 변화를 관찰하고 추가/삭제/값의 변화 유무를 판단하고 업데이트한다
    >  데이터 타입에 따라 2가지로 분류
 1.primitive-observer : 문자 / 숫자의 값의 변화를 추적
 2.object-observer : 배열의 인덱스 변화/요소의 추가,삭제 및 객체의 값 / 요소의 추가,삭제를 관찰

- 실행 순서
    State.changeProperty=> State.update=> Subject.notify
    => Observer.update =>  Observer.render(결과값)


### checkEqaulity함수
- 객체의 상태를 체크하는 함수
- 전달받은 두 객체의 key값을 배열로 만들어 각각의 길이를 비교
1. 길이 다를 때
객체의 추가/삭제를 관찰
    - 길이가 긴 배열에 대해 반복을 시행
    - 두 배열이 같은 인덱스에 같은 값을 갖고 있는지 확인
    - 원소가 추가 혹은 삭제된 순간은 두 원소의 값이 달라져서 false를 반환할때의 index를 이용
    - false를 포함하고 있는 인덱스의 원소(기존과 바뀐 원소)의 값들을 반환=>즉, 변수 changedValue가 추가/삭제된 원소들의 배열
    ```javascript
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    let result  = [],
        chagnedValue = [],
        target = key1.length > key2.length ? obj1 : obj2;
    let result = target.map((_,index)=>obj1[index] === obj2[index]);
    chagnedValue = result.map((v,i)=>!v?target[i]:'').filter(v=>v);
```
    
2. 길이 같을 때
    - 인덱스 변화를 관찰
    - Array.prototype.map을 통해 기존 객체와 현재 객체가 같은 키에 같은 값을 가지고 있는지를 판단
