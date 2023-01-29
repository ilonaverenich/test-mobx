import React,{useState} from 'react'
import store from '../store/btnStore'
import {observer} from 'mobx-react'

function Todo() {
  const[itemList, setItemList] = useState('')
  const[errors, setError] = useState(false)

  function clickBtn(){
    if(itemList.length!==0){
      store.arrayList(itemList);
      setItemList('')
      setError(false)
    } else {
      setError(true)
    }
 
  
  }
  return (
    <div>
      <h1>TODO LIST</h1>
      <input type="text" value={itemList} onChange={(e)=>setItemList(e.target.value)} />
     
      <button onClick={()=>clickBtn()}>Добавить</button>
      {errors?<p>Вы не ввели значение</p>:''}
      <ul>
       {store.list && store.list.map((item,id)=><div><li id={id}>{item} </li><button onClick={()=>store.deleteItem(item)}>X</button></div>)}
      </ul>   
    </div>
  )
}

export default observer(Todo)