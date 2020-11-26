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
    notify (...data) {
        if (this.observers.length > 0) {
            let type = typeof data[0] === 'object' ? 'object' : 'primitive';
            
            this.observers.forEach(obs=>{
                this.result = type===obs.type ? obs.update(...data) : this.result;
            });
            return this.result
        }
    }
}
export default Subject;
