import React from 'react';
import { Switch, Route} from 'react-router-dom';


import Login from  './pages/Login';
import Atendimento from  './pages/Atendimento'



export default function Routes(){
  return (

      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/atendimento" exact component={Atendimento} />

      </Switch>

  )
}
