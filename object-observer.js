class ObjectObs {
    constructor () {
        this.type = 'object';
    }
    showCheckResult (arr1,arr2,result) {
        let compareResult = arr1.length > arr2.length ? {
            type : 'removed',
            removedValue : result
        } : {
            type : 'added',
            addedValue : result
        };
        return compareResult;
    }
    checkEquality (obj1,obj2) {
        const key1 = Object.keys(obj1);
        const key2 = Object.keys(obj2);
        let result  = [],
            chagnedValue = [],
            target = key1.length > key2.length ? obj1 : obj2;

        if (Array.isArray(obj1)) {
            if (key1.length === key2.length) {
                //index변화를 관찰(배열 내에서 두 원소의 index가 바뀌었는지 확인)
                result = key1.map((_,index)=>obj1[index] === obj2[index]);
                return result.indexOf(false) > -1 ? {type :'Index changed'} : '';
            } else {
                result = target.map((_,index)=>obj1[index] === obj2[index]);
                chagnedValue = result.map((v,i)=>!v?target[i]:'').filter(v=>v);
                return this.showCheckResult(key1,key2,chagnedValue);
            }
        } else {
            if (key1.length === key2.length) {
                result = key1.map((key)=>obj1[key] === obj2[key]);
                return result.indexOf(false) > -1 ? {type :'Property changed'} : '';
            } else {
                //value값이 서로 다른 key만 모아놓음
                result = Object.keys(target).filter((key)=>obj1[key] !== obj2[key]);
                chagnedValue = result.map(v=>target[v]);
                return this.showCheckResult(key1,key2,chagnedValue);
            }
        }
    }
    render (...data) {
        let checkResult = this.checkEquality(data[0],data[1]);
        return {
            ...checkResult,
            before : data[0],
            after : data[1]
        }
    }
    update (...data) {
        return this.render(...data);
    }
}

export default ObjectObs;