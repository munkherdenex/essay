import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "эсээ.гэрээсээ"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Mонгол эсээнүүд
        </h1>
        <p>Эсээ гэдэг нь ерөнхийдөө зохиогчийн өөрийнх нь хэлэх гэсэн “аргумент”, нотолгоог өгдөг бичиглэл юм.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Эсээ Унших</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
