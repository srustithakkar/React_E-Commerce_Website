import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Dashboard/index"
import Cart from "./components/Dashboard/Cart"
import Orders from "./components/Dashboard/Orders"


function App() {
    return (
        <div className="h-100">
            <BrowserRouter>
                <Switch>
                    <Route path= "/home" component={Home}/>
                    <Route path= "/cart" component={Cart}/>
                    <Route path= "/orders" component={Orders}/>
                </Switch>
            </BrowserRouter>
        </div>  
    );
}

export default App;
