import React,{Component} from 'react';
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom'
import Loadable from 'react-loadable';
import Header from './header';
import Footer from './footer';

import MyTable from './MyTable';
import APITest from './apitest';
import Notfound from './notfound';

const LoaderIcon = (props) => {
	if (props.error) {
		return <div>Oh no, something went wrong!</div>;
	} else if (props.delay) {
		return <h2>Loading...</h2>
	} else {
		return null;
	}
}
const LoadableHome = Loadable({
    loader:()=>import('./home'),
    loading:LoaderIcon,
    delay: 30
})

const LoadableCrud = Loadable({
    loader:()=>import('./Crud'),
    loading(){
        return <div>loading...</div>
    }
})

class Layout extends Component {
    
render(){
     
      return(
            <div>
                <Header/>
                <Router>
                    <div>
                    <Switch>
                    <Route path="/home" component={LoadableHome} />
                    <Route path="/mytable" component={MyTable} />
                    <Route path="/crud" component={LoadableCrud} />
                    <Route path="/apiIntegration" component={APITest} />
                    <Route component={Notfound} />
                    
                   
                    </Switch>
                    </div>
                    </Router>
                <Footer />
            </div>
      )
   }
 }
    export default Layout;
