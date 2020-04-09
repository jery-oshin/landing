import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Title } from '../../components/title/index';
import CountUp from 'react-countup';
import Counterdata from '../../data/project/index';
import './project.scss';
import { useStaticQuery, graphql } from 'gatsby';

function Project() {

    const data = useStaticQuery(graphql`
        query {
            
            allWordpressWpLandingpages{
                edges{
                    node{
                        id
                        acf{
                            proyect_name
                            proyect_total
                        }
                    }   
                }
            }
        }
    `)

    return (
        <section className="project-wrapper gradient-color" id="project">
            <Container>
                <div className="project-content-wrapper">
                    <Row>
                        {data.allWordpressWpLandingpages.edges.map((edge, i) => {
                            if (edge.node.acf.proyect_name) {
                                return (
                                    <Col md={3} sm={6} className="mb-5" key={edge.node.id}>
                                        <div className={`counter-${i} project-box-outer`} >
                                            <div className="animated-bg">
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                            </div>
                                            <div className="counters">
                                                <CountUp delay={3} end={edge.node.acf.proyect_total} className="counters-number"></CountUp>
                                                <Title Class="counters-title" Name={edge.node.acf.proyect_name} />
                                            </div>
                                        </div>
                                    </Col>
                                )
                                
                            }
                            
                        })}
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Project;

