import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import '../styles/global.css'
import indexStyles from './styles/index.module.scss'

// import components
import ProjectsGrid from '../components/ProjectsGrid'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.hero}>
      <h1 className={indexStyles.header}>Hi, I’m Yasmin</h1>
      <p className={indexStyles.subHeader}>I’m UX/UI Designer with 2 years experience in the Financial Services Industry, looking for every opportunity to make people’s lives better and their hearts happier. I like to spot problems in user experience and find ways to fix them using the Design Thinking Method of Empathising, Defining, Ideating, Prototyping & Testing.</p>
    </div>
    <div className="container">
      <ProjectsGrid />
    </div>
  </Layout>
)

export default IndexPage

{/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */ }