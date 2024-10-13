import './App.css';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, changeTheme } from './redux/actions';


function App() {

  const store = createStore(rootReducer)  // создали объект store, который имеет методы dispatch, getState, subscribe
  
  
  
  store.subscribe(() => {
    const state = store.getState()
    console.log(state)
    console.log(state.value)
    const counterSpan = document.getElementById('counter')
    console.log(counterSpan)
    counterSpan.textContent = state.counter
    //console.log(document.getElementById('subBtn'))
    console.log(state.theme.value)
    console.log(document.getElementById('themeBtn'))
    document.getElementsByTagName('body')[0].classList.toggle('dark')
  })
  
  //store.dispatch({type: 'INIT_APPLICATION'})

  

  return (
    <div className="App">
      <div className='counterBlock'>
        <h2>Счётчик: <span id='counter'></span> </h2>
        <button id='addBtn' onClick={() => store.dispatch(increment())}>Добавить</button>
        <button id='subBtn' onClick={() => store.dispatch(decrement())}>Вычесть</button>
      </div>
      <div className='themeBlock'>
        <button id='themeBtn' className={store.getState().theme.value} onClick={() => store.dispatch(changeTheme())}>Сменить тему</button>
      </div>

    </div>
  );
}

export default App;
