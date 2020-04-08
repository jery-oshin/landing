import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { RingSpinner } from "react-spinners-kit";
import Navbar from '../containers/navbar'
import Banner from "../containers/banner"
import Service from "../containers/service"
import About from "../containers/about"
import Blog from "../containers/blog"
import Video from "../containers/video"
import Skills from "../containers/skills"
import Project from "../containers/project"
import Portfolio from '../containers/portfolio'
import Testimonial from '../containers/testimonial'
import Contact from '../containers/contact'
import Brand from '../containers/brands'
import Footer from '../containers/footer'
import CopyRight from '../containers/copyright_text'
import ThemeColor from '../containers/themecolor'
import ThemeOption from '../containers/themeoptions'
import "../assets/scss/style.scss"
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setLoader(true)
        }, 2000);
        return () => clearInterval(interval);
    }, [])
    
    

    return (
        loader ?
            <div className="main-wrapper">
                <Navbar />
                <div id="main-content">
                    <Banner ChangeClass={'demo1'} />
                    <Service />
                    <About />
                    <Blog />
                    <Video />
                    <Skills />
                    <Project />
                    <Portfolio />
                    <Testimonial />
                    <Contact />
                    <Brand />
                    {/*<Footer />*/}
                    <CopyRight />
                    {/*<ThemeColor />*/}
                    {/*<ThemeOption />*/}
                </div>
            </div>
            :

            <div className="theme-loader">
                <RingSpinner size={80} color="#e100ff" loading={!loader} />

            </div>
    )
}

export default IndexPage
