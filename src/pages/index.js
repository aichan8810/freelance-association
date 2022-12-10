import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import '../styles/style.css'

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <main>
    <section id="mv">
      <div className="hero-texts">
        <h1 className="hero-title">この先も続けたい。<br/>まだ見ぬ世界の<br/>フリーランサーへ。</h1>
        <p className="hero-exp">
        フリーランスは「働き方」ではなく「生き方」であり、人生そのものです。<br/><br/>令和となり、「教育・仕事・引退」といった3つの人生ステージから、<br/>マルチステージの人生へとライフシフトした現代。<br/>誰もが人生で一度は「フリーランス」として生きる時代が訪れるかもしれません。<br/><br/>フリーランスは自分が主役でありながら、独りである必要があるのか。<br/><br/>フリーランス連盟では独りではなく、仲間ともっと輝くものにできないか。<br/>フリーランスで在り続ける将来の不安を払拭できないか。<br/>扉を開ければいつでも仲間が待っている環境を創りたい。<br/>協業して課題を乗り越え、経験・スキルの切り売りだけでは終わらない状態を創りたい。<br/>それが我々の希望です。
        </p>
        <Link to="/about-us " className="more base-btn">WHO WE ARE <span></span></Link>
      </div>
    </section>
      <section id="activity"></section>
      <section id="member"></section>
      <section id="topics"></section>
      <section id="voices"></section>
      <section id="half">
        <section id="about"></section>
        <section id="contact"></section>
      </section>
    </main>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="フリーランス連盟" />

export default IndexPage
