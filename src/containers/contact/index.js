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


function Contact() {

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
                            <Image Path={ContactImg} Class="logo-img" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-content-block main-title-wrapper">
                            <Subtitle
                                Class="sitemain-subtitle"
                                Name="Send us mesage for any Info"
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name="Call us for any emergency"
                            />
                            <Description
                                Class="contact-dec"
                                Name="+1 123 - 456 - 7890"
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
