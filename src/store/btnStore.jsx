import {observable} from 'mobx';

const store = observable({
    count: 0,
    calcCount(){
        this.count = this.count+1
    }
})

export default store;
