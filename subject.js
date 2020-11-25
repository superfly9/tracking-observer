class Subject {
    constructor () {
        this.observers = [];
    }
    add (...observer) {
        this.observers.push(...observer);
    }
    remove (observer) {
        this.observers = this.observers.fillter(obs=>obs !== observer);
    }
    // data = ( 5, 7) or ( [],  [])  or ( {}, {})
    // ....data  = 5,7 [],[] , {},{}
    notify (...data) {
        if (this.observers.length > 0) {
            console.log('subject data:',data,typeof data[0])
            let type = typeof data[0];
            
            this.observers.forEach(obs=>{
                this.result = type===obs.type ? obs.update(...data) : this.result;
            });
            return this.result
        }
    }
}
//Subject - Observer를 관리하는 객체
//state를 가진 객체가 여러가지 일 수 있으므로(count/name..등등)
// 이 객체들이 Subject를 상속해서 변화된 상태를 notify를 전달가능하게함
export default Subject;
