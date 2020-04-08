import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Titlespan2, Title } from '../../components/title/index';
import Image from '../../components/image/index';
import Skills_img from '../../assets/images/skills/skills-img.png';
import Progressbar from './progressbar';
import './skills.scss';
import "../../assets/scss/variable.scss";
import { useStaticQuery, graphql } from 'gatsby'

function Skills() {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpLandingpages{
                edges{
                    node{
                        acf{
                            skills_information_title
                            skills_information_subtitle
                            skills_information_description
                            skills_information_image{
                                source_url
                            }
                            skills_progressbar_title
                            skills_progressbar_average
                        }
                    }   
                }
            }
        }
    `)

    return (
        <section className="skills-wrapper" id="skills">
            <Container>
                <Row>
                    <Col md={6} sm={0}>
                        <div className="skills-image">
                            <Image Path={Skills_img} Class="logo-img" />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="skills-content-block main-title-wrapper">
                            <Titlespan2
                                Class="sitemain-subtitle"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.skills_information_title) {
                                        return edge.node.acf.skills_information_title
                                    }
                                })}
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.skills_information_subtitle) {
                                        return edge.node.acf.skills_information_subtitle
                                    }
                                })}
                            />

                            <Description
                                Class="skills-dec"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.skills_information_subtitle) {
                                        return edge.node.acf.skills_information_description
                                    }
                                })}
                            />
                            <div className="progress-outer-block">
                                <Title
                                    Class="progress-title"
                                    Name="Our Best Skill"
                                />
                                <div className="progressbar-wrapper-block">
                                    <div className="progressbar-block">
                                        {data.allWordpressWpLandingpages.edges.map((edge, index) => {
                                            if (edge.node.acf.skills_progressbar_title) {
                                                return (
                                                    <Progressbar
                                                        Class={`progressbar${index+1}`}
                                                        Percenteg={edge.node.acf.skills_progressbar_average}
                                                        ProgressTitle={edge.node.acf.skills_progressbar_title}
                                                        ProgressClass="progressbar-title"
                                                    />
                                                )
                                            }
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
