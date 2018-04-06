import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Animals from "./Animals";
import Form from "./Form";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const _data = [{name:'Dog', age:12, color:'brown'},
{name:'Cat', age:7, color:'black'},
{name:'Fish', age:6, color:'red'},
{name:'Tortle', age:40, color:'green'},
];
const optionsData = ['lorem', 'ipsum', 'dolor'];
const App = () => {
  return(
  <div>
    <Link to="/hello">Texte du lien</Link>
    <Link to='/'>Accueil</Link>
    <Link to='/Animals'>Animals</Link>
    
     <Switch>
      <Route path="/hello" component={Hello} />
      <Route path="/Animals" component={Animals}/>
     </Switch>
     <Animals data={_data}/>
     <Form data={optionsData} />
  </div>
  )
}
const routes = (
  <Router>
   <Route path="/" component={App} />
  </Router>
)
export default App;

ReactDOM.render((routes), document.getElementById("app"));