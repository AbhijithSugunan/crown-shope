import React from "react";
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInSignOut from './pages/sign-in-signup/sign-in-signup.component'
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignOut} />
      </Switch>
    </div>
  );
}
}

export default App;
