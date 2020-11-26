class PrimitiveObs {
    constructor () {
        this.type = 'primitive';
    }
    render (...data) {
        let type = 'no change'
        if (data[0]!==data[1]) type = 'value change'
        return {
            type,
            before : data[0],
            after : data[1]
        }
    }
    update (...data) {
        return this.render(...data);
    }
}
export default PrimitiveObs;