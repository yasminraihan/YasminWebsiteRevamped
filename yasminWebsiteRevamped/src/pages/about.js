import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import aboutStyles from './styles/about.module.scss'

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={aboutStyles.hero}>
            <h1 className={aboutStyles.header}>This is the About Page</h1>
            <p>I’m UX/UI Designer with 2 years experience in the Financial Services Industry, looking for every opportunity to make people’s lives better and their hearts happier. I like to spot problems in user experience and find ways to fix them using the Design Thinking Method of Empathising, Defining, Ideating, Prototyping & Testing.</p>
        </div>
    </Layout>
)

export default AboutPage