import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import { useStateValue } from './context/StateProvider';
// import * as actionTypes from './context/actionTypes';
function App() {
  const [stateValue] = useStateValue();
  // useEffect(() => {
  //   if (localStorage.getItem('user'))
  //   {
  //     dispatch({
  //       type: actionTypes.SET_USER,
  //       payload: localStorage.getItem('user')
  //     });
  //   }
  // }, []);
  return (
    <Router>
      {
        !stateValue.user ? (<Login />) : <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/chat/:chatId" component={Chat} />
            </Switch>
          </div>
        </div>
      }

    </Router>
  );
}

export default App;
