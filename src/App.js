import logo from './logo.svg';
import './App.css';
import ToDoComponent from './components/ToDoComponent/ToDoComponent';
import CounterComponent from './components/counter/CounterComponent';
import SocialMediaComponent from './components/social/SocialMediaComponent'


import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';



const reducer = (previousState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let newState = [...previousState];
      newState.push(action.payLoad);
      return newState;
    case 'DELETE_TODO':

      let temp = [...previousState];
      const index = temp.findIndex((element) =>
        element === action.payLoad
      );
      temp.splice(index, 1);
      return temp;
    default:
      return previousState;
  }
}

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer, ['Go to bank'], composeEnhancers(applyMiddleware()));


const store2 = configureStore({
  reducer: reducer,
  preloadedState: []
});



function App() {
  return (
    <div className="App">
      <Provider store={store2}>
        <ToDoComponent test="test123"/>
        {/* <SocialMediaComponent></SocialMediaComponent> */}
      </Provider>

    </div>
  );
}

export default App;
