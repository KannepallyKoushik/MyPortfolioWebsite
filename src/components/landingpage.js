import React from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends React.Component{
    render(){
        return(
            <div style = {{width:'100%',margin : 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={require('../img/portfolio.jpg')}
                        className="profile-pic"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr />
                            <p>HTML | CSS | JavaScript | React | React Native | NodeJs | PHP | MYSQL | PostgreSQL | MongoDb</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/kannepally-koushik-kumar-379095146/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                <a href="https://github.com/KannepallyKoushik"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;