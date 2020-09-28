import React from "react";
import './style.css';
import { Header, Container, Image, Reveal, Grid } from "semantic-ui-react";
import { Col, Row } from '../Grid';
import Skills from '../skills';
import Resume from "../../assets/images/resume.pdf";
import Profile from '../../assets/images/profile.png';
import Mount1 from '../../assets/images/mountain1.png';
import Mount2 from '../../assets/images/mountain2.png 14-09-49-651.png';

function Heading() {
    return (

        <div className="container-fluid" >
            <Container fluid >
                <Col size="sm-8">
                    <Header as='h2' textAlign='center'
                        className="main-name center aligned header"> Hi there, <br /> I'm Barbara Potiriadis</Header>
                    <Reveal className="resume" animated='move'>
                        <Reveal.Content visible>
                            <Image src={Profile} size='small' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <a href={Resume} target="_blank" className="btn btn-primary"
                            >Resume</a>
                        </Reveal.Content>
                    </Reveal>
                </Col>
                <div className="about">
                <Grid columns={2}>
                    <Grid.Column>
                        <div className="about-me-1">
                            Full Stack Web Developer with a background in Market Research bringing a passion for writing clean code
                            to architect creative user-friendly interfaces. Curious and experimental by nature and Willing to leverage my creativity and problem
                            solving skills to build dynamic front and back-end applications.
                            <br /><br />
                            Always attuned to the latest UX/UI designs and thrives on continuous learning and experimentation to develop polished and interactive
                            applications with a strong attention to detail. I'm an adventurous risk taker, whether I'm in the office or outdoors, who's not
                            afraid to step outside the boundaries and tackle any challenge with persistance. I have demonstrated a solid
                            ability to work under pressure in the field of market research to manage an online community/panel, including
                            survey scripting and designing email marketing campaigns, whilst working on internal projects using statistical
                            methods to draw inferences and insights for clients.
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="about-me-2">
                            When I'm not coding, you'll find me cooking up a storm in the kitchen, working out and devouring in
                            ice-cream. Travelling is a core passion of mine, where my travel highlights include the US and Europe. I am
                            eager to apply the many skills learned in this rewarding course to work as a professional in the field of Web
                            development.
                        </div>
                    </Grid.Column>
                </Grid>
                </div>
                <div className="section">
                    <img src={Mount1} className="mountain1" alt="mountain-1" />
                    <img src={Mount2} className="mountain1" alt="mountain-2" />
                </div>
            </Container>
        </div>
    )
}

export default Heading;
