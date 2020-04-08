import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title/index';
import Button from '../../components/button';
import { Servicedata, Servicedata1 } from '../../data/service/index';
import PreviewIcon from '../../components/icon';
import '../service/service.scss';
import { useStaticQuery, graphql } from 'gatsby';

function Service() {

    const data = useStaticQuery(graphql`
        query {
            
            allWordpressWpLandingpages{
                edges{
                    node{
                        acf{
                            business_solution_title
                            business_solution_subtitle
                            business_solution_minititle
                            business_solution_description
                            features_title
                            features_description
                        }
                    
                    }   
                }
            }
        }
    `)

    return (
        <section className="service-wrapper" id="service">
            <Container>
                <Row>
                    <Col lg={5} md={4}>
                        <div className="service-content-1 main-title-wrapper">
                            <Titlespan2
                                Class="sitemain-subtitle"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.business_solution_title) {
                                        return edge.node.acf.business_solution_title
                                    }
                                })}
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.business_solution_subtitle) {
                                        return edge.node.acf.business_solution_subtitle
                                    }
                                })}
                            />
                            <Title
                                Class="service-title"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.business_solution_minititle) {
                                        return edge.node.acf.business_solution_minititle
                                    }
                                })}
                            />
                            <Description
                                Class="service-dec"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.business_solution_description) {
                                        return edge.node.acf.business_solution_description
                                    }
                                })}
                            />
                            <Button
                                Class="button1 btn button2 gradient-color"
                                Name="Explore"
                                BtnIcon="btn-icon"
                            />
                        </div>
                    </Col>
                    <Col lg={7} md={8} className="service-block-content">
                        <Row>
                            <Col sm={6} className="service-block1">
                                {Servicedata.map((data, i) => (
                                    <div className={`service-${i} service-content`} key={data.id}>
                                        <div className="service-icon">
                                            <span><PreviewIcon icon={data.Icon} /></span>
                                        </div>
                                        <div className="service-content-dec">
                                            <Title Class="service-title" Name={data.title} />
                                            <Description Class="service-dec-content" Name={data.content} />
                                        </div>
                                    </div>
                                ))}
                            </Col>
                            <Col sm={6} className="service-block1">
                                {
                                    data.allWordpressWpLandingpages.edges.map((edge, index) => {
                                        if (edge.node.acf.features_title) {
                                            return (
                                                <div className={`service-${index} service-content`} key={index}>
                                                    <div className="service-content-dec">
                                                        <Title Class="service-title" Name={edge.node.acf.features_title} />
                                                        <Description Class="service-dec-content" Name={edge.node.acf.features_description} />
                                                        
                                                    </div>
                                                </div>
                                            )
                                        }
                                        
                                    })
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Service;
