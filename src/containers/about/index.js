import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Titlespan2 } from '../../components/title/index';
import Button from '../../components/button';
import Image from '../../components/image/index';
import AboutImg from '../../assets/images/about/about-img.png';
import './about.scss';
import { useStaticQuery, graphql } from 'gatsby';

function About() {

    const data = useStaticQuery(graphql`
        query {
            
            allWordpressWpLandingpages{
                edges{
                    node{
                        acf{
                            about_title
                            about_subtitle
                            about_description
                            about_image {
                                source_url
                            }
                        }
                    
                    }   
                }
            }
        }
    `)

    return (
        <section className="about-wrapper gradient-color" id="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="about-content-block main-title-wrapper">
                            <Subtitle
                                Class="sitemain-subtitle"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                        if (edge.node.acf.about_title) {
                                            return edge.node.acf.about_title
                                        }
                                    })}
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                        if (edge.node.acf.about_subtitle) {
                                            return edge.node.acf.about_subtitle
                                        }
                                    })}
                            />

                            <Description
                                Class="about-dec about-dec-1"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                        if (edge.node.acf.about_description) {
                                            return edge.node.acf.about_description
                                        }
                                    })}
                            />
                            <Button
                                Class="button1 button4 btn"
                                Name="HIRE US NOW"
                                Title="gradient-color"
                                BtnIcon="btn-icon gradient-color1"
                            />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="about-image">
                            {data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.about_image != null) {
                                        return (
                                            <Image
                                                Path={
                                                    edge.node.acf.about_image.source_url
                                                }
                                                Class="about-img rounded-circle"
                                            />
                                        )
                                    }
                                })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
