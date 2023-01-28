import {observable} from 'mobx';

const store = observable({
    list: [],
    arrayList(a){
       this.list.push(a)
    },
})

export default store;
