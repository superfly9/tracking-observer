class ObjectObs {
    constructor () {
        this.type = 'object';
    }
    // [1,2,3] => [3,2,1]  index [0,2] => [2,0] Object.key의 length같은데 값이 다르다?index change
    // [1,2,3,4] [1,2,a,3,4]  added    return at next when value is change
    // [1,2,a,3,4]  [1,2,3,4] remove : return at prev when value is changed
    checkEquality (obj1,obj2) {
        const key1 = Object.keys(obj1);
        const key2 = Object.keys(obj2);
        console.log(obj1,obj2)
        if (Array.isArray(obj1)) {
            let result  = [];
            if (key1.length === key2.length) {
                //index변화를 관찰(배열 내에서 두 원소의 위치가 바뀌었는지 확인)
                result = key1.map((_,index)=>obj1[index] === obj2[index]);
                return result.index(false) > -1 ? {type :'Index changed'} : '';
            } else {
                let target = key1.length > key2.length ? obj1 : obj2;
                let chagnedValue = [];
                result = target.map((_,index)=>obj1[index] === obj2[index]);
                chagnedValue = result.map((v,i)=>!v?target[i]:'').filter(v=>v);
                let compareResult = key1.length > key2.length ? {
                    type : 'removed',
                    removedValue : chagnedValue
                } : {
                    type : 'added',
                    addedValue : chagnedValue
                };
                return compareResult;
            }
        } else {

        }
    }
    render (...data) {
        let checkResult = this.checkEquality(data[0],data[1]);
        console.log('final:',checkResult)
        return {
            ...checkResult,
            before : data[0],
            after : data[1]
        }
    }
    update (...data) {
        console.log('data when Object update:',data);
        // data  = [5,7];
        return this.render(...data);
    }
}

export default ObjectObs;