import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title/index';
import BlogData from '../../data/blog/index';
import PreviewIcon from '../../components/icon';
import { useStaticQuery, graphql } from 'gatsby';
import './blog.scss';

function Blog() {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpLandingpages{
                edges{
                    node{
                        id
                        acf{
                            blog_title
                            blog_subtitle
                            blog_description
                            blog_post_title
                            blog_post_description
                            blog_post_image{
                                source_url
                            }
                        }
                    }   
                }
            }
        }
    `)
    return (
        <section className="blog-wrapper" id="blog">
            <Container>
                <div className="main-title-wrapper">
                    <Subtitle
                        Class="site-subtitle"
                        Name={data.allWordpressWpLandingpages.edges.map(edge => {
                            if (edge.node.acf.blog_subtitle) {
                                return edge.node.acf.blog_subtitle
                            }
                        })}
                    />
                    <Titlespan2
                        Class="sitemain-subtitle"
                        Name={data.allWordpressWpLandingpages.edges.map(edge => {
                            if (edge.node.acf.blog_title) {
                                return edge.node.acf.blog_title
                            }
                        })}
                    />

                    <Description
                        Class="site-dec"
                        Name={data.allWordpressWpLandingpages.edges.map(edge => {
                            if (edge.node.acf.blog_description) {
                                return edge.node.acf.blog_description
                            }
                        })}
                    />
                </div>
                <Row className="justify-content-center">
                    {data.allWordpressWpLandingpages.edges.map((edge, i) => {
                        if(edge.node.acf.blog_post_title){
                            return (
                                <Col lg={4} sm={6} key={edge.node.id} className={`blog-${i}`}>
                                    <div className="blog-content">
                                        {
                                        <div className="blog-first-block">
                                            <img src={edge.node.acf.blog_post_image.source_url} alt="" title="" />
                                        </div>
                                        }
                                        <div className="blog-second-block">
                                            {/*
                                            <div className="blog-left-content">
                                                <div className="blog-icon">
                                                    <span><PreviewIcon icon={data.Icon} /></span>
                                                </div>
                                            </div>
                                            */}
                                            <div className="blog-right-content">
                                                
                                                <Title
                                                    Class="blog-title"
                                                    Name={edge.node.acf.blog_post_title}
                                                />
                                                <Description
                                                    Class="blog-dec"
                                                    Name={edge.node.acf.blog_post_description}
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

export default Blog;
