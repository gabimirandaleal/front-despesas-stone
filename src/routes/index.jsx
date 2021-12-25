import {Switch, Route} from "react-router-dom" 
import { Toaster } from 'react-hot-toast';
import Home from "../Pages/Home";

function Routes(){
    return(
        <div>
            <Toaster />
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;