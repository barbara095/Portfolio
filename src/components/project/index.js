import React from "react";
import { Container, Button, Header, Item } from 'semantic-ui-react';
import { Col } from '../Grid';
import Wrapper from '../wrapper';
import Burger from '../../assets/images/burger.png';
import Codequiz from '../../assets/images/codequiz.png';
import Planner from '../../assets/images/dayplanner.png';
import Finance from '../../assets/images/finance.png';
import Project1 from '../../assets/images/project1.png';
import Notes from '../../assets/images/notetaker.png';
import Password from '../../assets/images/password.png';
import Team from '../../assets/images/teamgenerator.png';
import Employee from '../../assets/images/employeetracker.png';
import Weather from '../../assets/images/weather2.png';
import Fitness from '../../assets/images/fitness.png';
import ReadMe from '../../assets/images/README.png';
import './style.css';

function Project() {
    return (
       
        <Container className='container' >  
            <Wrapper className='wrapper'>
            <Col size="sm-6 center" >
                    <Header as='h2' textAlign='center'
                        className="title center aligned header"> Projects</Header>
                    </Col>
        <Item.Group divided>
            <Item>
                <Item.Image src={Project1} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}}as='a'>My dream Home</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}} >An application designed to simplify and optimise the house hunting
                     journey to bring you the most relevant listings.</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://bdcoelho.github.io/Project1/index.html"} 
                        target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/bdcoelho/Project1"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={Team} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>Team Profile Generator</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>A CLI application that generates a profile of your team!</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://drive.google.com/file/d/1qb3fogZEOd2BaxS129ipGzi1xCDQ10Ro/view?usp=sharing"} 
                        target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/barbara095/Team-Profile-Generator"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>
            <Item>
                <Item.Image src={Burger} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>Eat Da Burger!</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>A Node burger logger application that uses the MVC model to add, devour and remove
                  burgers!</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://boiling-springs-85381.herokuapp.com/"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/barbara095/Node-Eat-Da-Burger"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={Finance} />
                <Item.Content >
                    <Item.Header style={{color: '#ffa07a'}} as='a'>My Stock Pal</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>A finance application that uses MySQL, Express and Node.js to allow users to add,
                  watch, buy and sell stocks</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://fast-lake-54569.herokuapp.com/userSummery"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/kube-consult/Project-2-trading-platform"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={Fitness} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>Fitness Tracker</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>An application that uses MongoDB to enable 
                        a user to view, create and keep track of their workouts.</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://nameless-refuge-53137.herokuapp.com/"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/barbara095/NoSQL-Fitness-Tracker"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={Notes} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>Note Taker</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>An Express Application that uses Node to write, save and delete notes!</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://rocky-beach-44248.herokuapp.com/"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/barbara095/Express-Note-Taker"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={Employee} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>Employee Tracker</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>Don't lose track of your employees with this Employee Management System that allows
                  you to add, update and remove employees, roles and departments using MySQL.</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://drive.google.com/file/d/10QKepTv7aqd8F3663eIP48RBgjXbRfRY/view"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/barbara095/MySQL-Employee-Tracker"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={ReadMe} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>README Generator</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>A CLI application that generates a professional README.md file using node.js</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://drive.google.com/file/d/1BQjPcuoJsPfD1er9SSBebo8AzbEnA-ju/view"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/barbara095/README-Generator"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={Weather} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>Weather Dashboard</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>An application using OpenWeather API that gives you a 5-day detailed weather overview for any city</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://barbara095.github.io/weather-dashboard-HW6/"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://barbara095.github.io/weather-dashboard-HW6/"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={Codequiz} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>The Ultimate Code Quiz</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>Test your knowledge of full stack web development with this fun quiz.</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://barbara095.github.io/code-quiz-HW4/"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/barbara095/code-quiz-HW4"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={Password} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>Password Generator</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>Protect your account and beat the hackers. Create a secure password with this
                  password generator.</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://barbara095.github.io/password-generator-HW3/"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/barbara095/password-generator-HW3"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src={Planner} />
                <Item.Content>
                    <Item.Header style={{color: '#ffa07a'}} as='a'>Work Day Planner</Item.Header>
                    <Item.Description style={{color: '#f7c6b3'}}>Make your work day more organised with this simple work scheduler</Item.Description>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://barbara095.github.io/work-day-scheduler-HW5/"} target="_blank" >App</Button>   
                    </Item.Extra>
                    <Item.Extra>
                        <Button style={{backgroundColor: '#ffa07a'}} primary floated='left' 
                        a href={"https://github.com/barbara095/work-day-scheduler-HW5"} 
                        target="_blank" >Github</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
     
        </Wrapper>
    </Container>
   
  
    )
}

export default Project;