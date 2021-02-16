import {Link,BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Signup from "./Signup"
import Signin from "./Signin"
import Home from "./Home"
function App() {



  const allRoutes  = (
    <Router>
      <Switch>
        <Route exact path = "/"  component = {Signup} /> 
        <Route exact path = "/signin"  component = {Signin} />
        <Route exact path = "/home"  component = {Home} />
      </Switch>
    </Router>
    
  )
  return (
   allRoutes
  );
}

export default App;
