import {observable} from 'mobx';

const store = observable({
    list: [],
    arrayList(a){
        this.list = this.list.push(a)
    },
    deleteItem(a){
        this.list= this.list.filter(item=>item!==a)
    }
})

export default store;
