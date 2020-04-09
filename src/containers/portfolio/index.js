import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title/index';
import PortfolioData from '../../data/portfolio/index';
import './portfolio.scss';
import { useStaticQuery, graphql } from 'gatsby';

function Portfolio() {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpLandingpages{
                edges{
                    node{
                        id
                        acf{
                            portfolio_title
                            portfolio_subtitle
                            portfolio_description
                            portfolio_project_name
                            portfolio_project_description
                            portfolio_project_image{
                                url
                            }
                        }
                    }   
                }
            }
        }
    `)


    return (
        <section className="portfolio-wrapper" id="portfolio">
            <Container>
                <div className="main-title-wrapper">
                    <Subtitle
                        Class="site-subtitle"
                        Name={data.allWordpressWpLandingpages.edges.map(edge => {
                            if (edge.node.acf.portfolio_subtitle) {
                                return edge.node.acf.portfolio_subtitle
                            }
                        })}
                    />
                    <Titlespan2
                        Class="sitemain-subtitle"
                        Name={data.allWordpressWpLandingpages.edges.map(edge => {
                            if (edge.node.acf.portfolio_title) {
                                return edge.node.acf.portfolio_title
                            }
                        })}
                    />
                    <Description
                        Class="site-dec"
                        Name={data.allWordpressWpLandingpages.edges.map(edge => {
                            if (edge.node.acf.portfolio_description) {
                                return edge.node.acf.portfolio_description
                            }
                        })}
                    />
                </div>
                <Row>
                    {data.allWordpressWpLandingpages.edges.map((edge, i) => {
                        if(edge.node.acf.portfolio_project_name){
                            return (
                                <Col lg={4} sm={6} key={edge.node.id} className={`portfolio-${i}`}>
                                    <div className="portfolio-content">
                                        <div className="portfolio-first-block">
                                            <img src={edge.node.acf.portfolio_project_image.url} alt="" title="" />
                                            <div className="portfolio-hover">
                                                <Title
                                                    Class="portfolio-hover-title"
                                                    Name={edge.node.acf.portfolio_project_name}
                                                />
                                                <Description
                                                    Class="portfolio-hover-dec"
                                                    Name={edge.node.acf.portfolio_project_description}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }
                        
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Portfolio;
