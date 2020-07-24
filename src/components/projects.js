import React from 'react';
import {Tabs,Tab, Grid, Cell,Card,CardActions,CardTitle,CardText,Button} from 'react-mdl';

class Projects extends React.Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleProjectUI(){
        if(this.state.activeTab === 1){
            return(
                <div className='projects-grid'>
                <Card shadow={0} style={{width: '320px', height: '320px', margin: '15px'}}>
                   <CardTitle expand style={{color: 'white' ,fontWeight:'bold', margin: '5px', background: 'url(https://image.freepik.com/free-vector/dark-wavy-background-gradient_23-2148385755.jpg) center  / cover'}}>Student Hub</CardTitle>
                      <CardText>
                       A web application which resembles the GitHub for an organization where Students can Interact,
                       share their Ideas, projects and get help from others to clarity their doubts.
                       </CardText>
                   <CardActions border>
                     <Button colored href="https://github.com/KannepallyKoushik/StudentHub">GitHub</Button>
                     <Button colored href="http://52.12.113.4/StudentHub/StudentHub/">Live Demo</Button>
                   </CardActions>
               </Card>
         {/* ------------------------------------------------------------------------------------------*/}
               <Card shadow={0} style={{width: '320px', height: '320px', margin: '15px'}}>
                   <CardTitle expand style={{color: 'white' ,fontWeight:'bold', margin: '5px', background: 'url(https://image.freepik.com/free-vector/dark-wavy-background-gradient_23-2148385755.jpg) center  / cover'}}>Assets Management System</CardTitle>
                      <CardText>
                      This is a web application developed for the sake of AutomatEm Pvt LTD to keep a track of all the products, Dealers and Customers
                       </CardText>
                   <CardActions border>
                     <Button colored href="https://github.com/KannepallyKoushik/AssestsManagementSystem">GitHub</Button>
                     <Button colored href="http://52.12.113.4/AssestsManagementSystem/">Live Demo</Button>
                   </CardActions>
               </Card>
            {/* ------------------------------------------------------------------------------------------*/}
               <Card shadow={0} style={{width: '320px', height: '320px', margin: '15px'}}>
                   <CardTitle expand style={{color: 'white' ,fontWeight:'bold', margin: '5px', background: 'url(https://image.freepik.com/free-vector/dark-wavy-background-gradient_23-2148385755.jpg) center  / cover'}}>Street Cause GNI</CardTitle>
                      <CardText>
                       Developed a website for the largest student run NGO in Hyderabad, where they can post their
                        events and let people know their activities and the members of that Organization.
                       </CardText>
                   <CardActions border>
                     <Button colored href="https://github.com/KannepallyKoushik/StreetCauseGNI">GitHub</Button>
                     <Button colored href="http://52.12.113.4/StreetCauseGNI">Live Demo</Button>
                   </CardActions>
               </Card>
              {/* ------------------------------------------------------------------------------------------*/}
               </div>
            );
        }
        else if(this.state.activeTab === 0){
            return(
                <div>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                   <CardTitle expand style={{color: 'white' ,fontWeight:'bold', margin: '5px', background: 'url(https://mighil.com/wp-content/uploads/2019/12/add-dark-mode-wordpress-website.jpg) center  / cover'}}>AutomateEm Website</CardTitle>
                      <CardText>
                      This is a website which shows all the services and products provided by AutomateEm Pvt LTD
                       </CardText>
                   <CardActions border>
                     <Button colored href="https://automateem.in/">Live Demo</Button>
                   </CardActions>
                   </Card>
                </div>
                
            );
        }
        else if(this.state.activeTab === 2){
            return <div><h1>This is React projects</h1></div>
        }
        else if(this.state.activeTab === 3){
            return <div><h1>This is React Native projects</h1></div>
        }
    }

    render(){
        return(
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>WordPress</Tab>
                    <Tab>PHP</Tab>
                    <Tab>React</Tab>
                    <Tab>React Native</Tab>
                    
                </Tabs>
                <section>
                    <Grid >
                        <Cell col={12}>
                        <div className="content"> {this.toggleProjectUI()}</div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>    
        );
    }
}

export default Projects;