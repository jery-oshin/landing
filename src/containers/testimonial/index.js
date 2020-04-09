import React from 'react';
import { Container } from 'reactstrap';
import { Subtitle, Description, Titlespan2 } from '../../components/title/index';
import CarouselSlider from './testimonial';
import './testimonial.scss';
import { useStaticQuery, graphql } from 'gatsby';

function Testimonial() {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpLandingpages{
                edges{
                    node{
                        id
                        acf{
                            testimonial_section_title
                            testimonial_section_subtitle
                            testimonial_section_description
                        }
                    }   
                }
            }
        }
    `)

    return (
        <section className="testimonial-wrapper gradient-color" id="testimonial">
            <Container>
                <div className="main-title-wrapper">
                    <Subtitle
                        Class="site-subtitle gradient-color"
                        Name={data.allWordpressWpLandingpages.edges.map(edge => {
                            if (edge.node.acf.testimonial_section_subtitle) {
                                return edge.node.acf.testimonial_section_subtitle
                            }
                        })}
                    />
                    <Titlespan2
                        Class="sitemain-subtitle"
                        Name={data.allWordpressWpLandingpages.edges.map(edge => {
                            if (edge.node.acf.testimonial_section_title) {
                                return edge.node.acf.testimonial_section_title
                            }
                        })}
                    />
                    <Description
                        Class="site-dec"
                        Name={data.allWordpressWpLandingpages.edges.map(edge => {
                            if (edge.node.acf.testimonial_section_description) {
                                return edge.node.acf.testimonial_section_description
                            }
                        })}
                    />
                </div>
                <CarouselSlider />
            </Container>
        </section>
    );
}

export default Testimonial;
