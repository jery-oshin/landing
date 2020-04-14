import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
// import Img from "gatsby-image"
import { Subtitle, Description, Title } from '../../components/title/index';
import Image from '../../components/image/index';
import ContactImg from '../../assets/images/contact/woman.png';
import InputBox from '../../components/input/index';
import Button from '../../components/button';
import ContactBackgroundImages from '../../data/contact';
import '../contact/contact.scss';
import { graphql, useStaticQuery } from 'gatsby'


function Contact() {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpLandingpages{
                edges{
                    node{
                        acf{
                            contact_information_title
                            contact_information_subtitle
                            contact_information_description
                            contact_informacion_image{
                                source_url
                            }
                        }
                    }   
                }
            }
        }
    `)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handelSubmit = () => {
        const error = {}
        if (!name) {
            error.name = 'First Name field shouldn’t be empty';
        }
        if (!email) {
            error.email = 'Email field shouldn’t be empty';
        }
        if (!message) {
            error.message = 'Message field shouldn’t be empty';
        }

        if (error) {
            setErrors(error)
        } else {
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return (
        <section className="contact-wrapper" id="contact">
            <div className="contact-animation-images">
                {ContactBackgroundImages.map((img, index) => (
                    <span key={`contact-img-${index}`} className={`image${index + 1}`}><Image Path={img.img} /></span>
                ))}
            </div>
            <Container>
                <Row>
                    <Col sm={0} md={6}>
                        <div className="contact-image">
                            {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
                            {
                                data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.contact_informacion_image != null) {
                                        return(
                                            <Image Path={edge.node.acf.contact_informacion_image.source_url} Class="logo-img" />
                                        )
                                    }
                                })
                            }
                            
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-content-block main-title-wrapper">
                            <Subtitle
                                Class="sitemain-subtitle"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.contact_information_title) {
                                        return edge.node.acf.contact_information_title
                                    }
                                })}
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.contact_information_subtitle) {
                                        return edge.node.acf.contact_information_subtitle
                                    }
                                })}
                            />
                            <Description
                                Class="contact-dec"
                                Name={data.allWordpressWpLandingpages.edges.map(edge => {
                                    if (edge.node.acf.contact_information_description) {
                                        return edge.node.acf.contact_information_description
                                    }
                                })}
                            />
                            <div className="form">
                                <iframe className="border-0" src="https://new.offertcheck.com/products/frame/order-form?affId=576973&ofId=542877&linkId=671486&pixel=1861597263970331" width="100%" height="800"></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
