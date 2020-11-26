import Subject from './subject.js';

class State extends Subject{
    constructor (value) {
        super(); // Subject.observers = [];를 사용하기위해
        this.value  = value;
    }
    setProperty (value) {
        this.value = value;
    }
    update (data) {
        let oldValue,
            newValue,
            type = typeof data;
            if (type === 'object') {
                oldValue = this.value;
                newValue =data;
                this.value = data;
            } else {
                oldValue = this.value;
                newValue = data;
                this.value = newValue;
        }
        let result= this.notify(oldValue,newValue); // noitfy는 상속받아온 Subject의 method
        return result;
    }
    changeProperty (data) {
        //요소 변경 후 업데이트 함수 실행
        console.log(this.update(data));
    }
}

export default State;