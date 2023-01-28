import './App.css';
import {observer} from 'mobx-react'
import store from './store/btnStore';
import Todo from './Components/Todo';

function App() {

  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default observer(App);
