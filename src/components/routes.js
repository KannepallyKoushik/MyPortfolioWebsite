import React from 'react';
import { Route ,Switch} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';

class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path= "/" component={LandingPage}  />
                <Route exact path= "/aboutme" component={AboutMe}  />
                <Route exact path= "/resume" component={Resume}  />
                <Route exact path= "/projects" component={Projects}  />
                <Route exact path= "/contact" component={Contact}  />
            </Switch>
        );
    }
    
}

export default Main;