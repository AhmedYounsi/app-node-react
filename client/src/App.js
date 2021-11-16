import React, { Component, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'


// Redux
import { useSelector } from 'react-redux';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./components/pages/login/Login'))

const App = () => {
  const AuthReducer = useSelector((state) => state.auth);
  console.log(AuthReducer.token)
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());


    //   // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });

    });
  }, []);
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>

          <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />

          <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}


export default App
