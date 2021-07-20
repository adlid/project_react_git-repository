

import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Card from './Card/Card';
import Main from './main/main';
const App =()=>{

   
    return(
      
            <BrowserRouter>
              <div className="container">
                 <Switch> 
                  
                        <Route exact path="/" component={Main}/>
                        <Route path="/card/:username/:reponame" component={Card}/>
                        <Redirect to="/"/>
                 </Switch>
                 </div>
            </BrowserRouter>
      
    )
}
export default App