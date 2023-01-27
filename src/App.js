import './App.css';
import {observer} from 'mobx-react'
import store from './store/btnStore';
import Ilona from './Components/Ilona';

function App() {
  console.log(store.count)
  return (
    <div className="App">
      <Ilona/>
      <button onClick={()=>store.calcCount(store.count)}>Click</button>
      <p>Количество нажатий: {store.count} </p>
    </div>
  );
}

export default observer(App);
