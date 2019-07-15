import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/layout"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-left: 14vw;
  margin-top: 3vw;
`

const Title = styled.div`
  color: #b9b9b9;
  font-size: 40px;
  margin-bottom: 56px;
`

const Contents = styled.div`
  color: #b9b9b9;
  font-size: 16px;
  line-height: 1.5;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Wrapper>
        <Title>{post.frontmatter.title}</Title>
        <Contents dangerouslySetInnerHTML={{ __html: post.html }} />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
