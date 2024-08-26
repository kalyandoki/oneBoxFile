import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GoogleLoginForm from './components/GoogleLoginForm'
import OnBox from './components/OnBox'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GoogleLoginForm} />
      <Route path="/oneBox" component={OnBox} />
    </Switch>
  </BrowserRouter>
)

export default App
