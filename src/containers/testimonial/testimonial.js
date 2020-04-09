import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Description, Title } from '../../components/title/index';
import Image from '../../components/image/index';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.scss";

function CarouselSlider() {
    const data = useStaticQuery(graphql`
        query {
            allWordpressWpLandingpages{
                edges{
                    node{
                        id
                        acf{
                            testimonial_custumer_name
                            testimonial_custumer_subtitle
                            testimonial_custumer_description
                            testimonial_curstumer_image{
                                source_url
                            }
                        }
                    }   
                }
            }
        }
    `)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="testimonial-slider ">
            <div className="testimonial-outer-box">
                <Slider {...settings}>
                    {data.allWordpressWpLandingpages.edges.map((edge) => {
                        if(edge.node.acf.testimonial_custumer_name){
                            return (
                                <div className="testimonial-item" key={edge.node.id}>
                                    <div className="testimonial-content">
                                        <div className="animated-bg">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <Description
                                            Class="testimonial-dec"
                                            Name={edge.node.acf.testimonial_custumer_description}
                                        />
                                        <Title
                                            Class="testimonial-title"
                                            Name={edge.node.acf.testimonial_custumer_name}
                                        />
                                        <Title
                                            Class="testimonial-subtitle"
                                            Name={edge.node.acf.testimonial_custumer_subtitle}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    })}
                </Slider>
            </div>

        </div>
    );
}

export default CarouselSlider;
/*
function CarouselSlider() {
    const TestimonialList = useStaticQuery(graphql`
        query TestimonialQuery {
            allDataJson {
                edges {
                    node {
                        testimonial {
                            content
                            id
                            img
                            subtitle
                            title
                        }
                    }
                }
            }
        }
    `)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="testimonial-slider ">
            <div className="testimonial-outer-box">
                <Slider {...settings}>
                    {TestimonialList.allDataJson.edges[0].node.testimonial.map((data, index) => (
                        <div className="testimonial-item" key={index}>
                            <div className="testimonial-content">
                                <div className="animated-bg">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                                <Description
                                    Class="testimonial-dec"
                                    Name={data.content}
                                />
                                <Title
                                    Class="testimonial-title"
                                    Name={data.title}
                                />
                                <Title
                                    Class="testimonial-subtitle"
                                    Name={data.subtitle}
                                />
                                <div className="testimonial-images">
                                    <Image Path={data.img} />
                                </div> 

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default CarouselSlider;
*/

